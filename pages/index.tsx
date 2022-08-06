import { Htag } from "../components/index";
import { Button } from "../components/index";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="down">
        Hello
      </Button>
      <Button appearance="ghost">Hello</Button>
    </>
  );
}
