import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, P, Tag, Textarea, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";
import Error from "next/error";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Учебный проект</Htag>
      <Htag tag="h2">Создан на курсе Next.js + TypeScript</Htag>
      <Htag tag="h3">Можно посмотреть страницы курсов</Htag>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
