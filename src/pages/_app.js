import '../styles/globals.css';
import Head from 'next/head';
// import RootLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
      </Head>
      {/* <RootLayout> */}
        <Component {...pageProps} />
      {/* </RootLayout> */}
    </>
  );
}

export default MyApp;
