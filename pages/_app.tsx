import '../styles/globals.css';
import '../styles/SchoolFees.css';
import '../styles/settings.css';
import '../styles/transcript.css';
import '../styles/table.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>Transcript</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
