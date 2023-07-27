import "../styles/globals.sass";
import Head from "next/head";

import { AppConfig } from "../utils/AppConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
        <link rel="icon" href="/newFavicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
