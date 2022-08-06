import { Htag } from "../components/index";
import { Button } from "../components/index";
import { P } from "../components/index";
import { Tag } from "../components/index";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="down">
        Hello
      </Button>
      <Button appearance="ghost">Hello</Button>
      <P children={"ewdwedwedw"}></P>
      <Tag children={"ddfff"} color="red" />
    </>
  );
}
