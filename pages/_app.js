import '@/styles/globals.scss'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Ниндзя Кодеры</title>
            <link rel="icon" href="/public/favicon.ico" />
          <meta name="description" content="Детская школа программирования Ниндзя Кодеры - это инновационное обучение программированию для детей! Уникальные курсы по JavaScript, Scratch, Python. Развивайте творческое мышление, навыки будущего и создавайте свои сайты. Запишитесь на бесплатный пробный урок уже сегодня!" />
        </Head>
        <Component {...pageProps} />
      </>
      )

}
