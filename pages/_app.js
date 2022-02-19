import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RC Tech Club</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="RC Tech club is a student-run club focused on bringing technology that benefits residents of RC Lee Hall, HKU."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
