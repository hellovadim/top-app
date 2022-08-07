import { useState } from "react";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interfaces";
import { Htag } from "../components/index";
import { Button } from "../components/index";
import { P } from "../components/index";
import { Tag, Rating } from "../components/index";
import { withLayout } from "../layout/Layout";
import axios from "axios";

function Home({ menu, firstCategory }: HomeProps) {
  const [raiting, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="down">
        Hello
      </Button>
      <Button appearance="ghost">Hello</Button>
      <P children={"ewdwedwedw"}></P>
      <Tag children={"ddfff"} color="red" />
      <Rating rating={raiting} isEditable={true} setRating={setRating} />
      {menu.map((list) => (
        <div key={list._id.secondCategory}>{list._id.secondCategory}</div>
      ))}
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "api/top-page/find",
    {
      firstCategory,
    }
  );
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
