import "../styles/globals.sass";
import Head from "next/head";

import { AppConfig } from "../utils/AppConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
