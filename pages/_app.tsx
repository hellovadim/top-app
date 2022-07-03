import '../styles/globals.css'
import Head from '../node_modules/next/head'
import { AppProps } from '../node_modules/next/app'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <>
  <Head>
    <title>OwlTop</title>
  </Head>
  <Component {...pageProps}/>
  </>
}

export default MyApp
