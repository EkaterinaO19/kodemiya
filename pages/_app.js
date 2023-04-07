import '@/styles/globals.scss'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>My Page Title</title>
          <meta name="description" content="This is a meta description." />
        </Head>
        <Component {...pageProps} />
      </>
      )

}
