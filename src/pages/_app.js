import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
// import RootLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />

    </>
  );
}

export default MyApp;
