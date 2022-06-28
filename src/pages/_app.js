import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

import Head from "next/head";

import Header from '@components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>
          Yarn shop
        </title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
