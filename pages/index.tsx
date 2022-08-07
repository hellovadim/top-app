import { useState } from "react";

import { Htag } from "../components/index";
import { Button } from "../components/index";
import { P } from "../components/index";
import { Tag, Rating } from "../components/index";

export default function Home() {
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
    </>
  );
}
