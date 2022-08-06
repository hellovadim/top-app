import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "../node_modules/next/document";

<<<<<<< HEAD
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render(): JSX.Element {
    console.log("hi");
    return (
      <Html lang="ru">
=======

 class MyDocument extends Document {

static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  const initialProps = await Document.getInitialProps(ctx);
  return {...initialProps}
}


render(): JSX.Element {
  return (
    <Html lang="ru">
>>>>>>> parent of 5834c0d... space
        <Head>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Head>
    </Html>
  )
}
}

export default MyDocument;