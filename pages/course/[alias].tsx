import { useState } from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { TopPageModel } from "../../interfaces/toppage.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interfaces";

const firstCategory = 0;

function Course({ menu, firstCategory, product, page }: CourseProps) {
  return <></>;
}
export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    paths: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "api/top-page/find",
    {
      firstCategory,
    }
  );
  if (menu.length == 0) {
    return {
      notFound: true,
    };
  }
  const { data: page } = await axios.get<TopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "api/top-page/byAlias/" + params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "api/product/find/",
    {
      category: page.category,
      limit: 10,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};
interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}
