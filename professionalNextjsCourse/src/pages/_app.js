import { ProvidePaginator } from '@hooks/usePaginator';
import { ProvideAuth } from 'hooks/useAuth';
import Head from 'next/head';

import MainLayout from '@layout/MainLayout';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React shop</title>
      </Head>
      <ProvideAuth>
        <ProvidePaginator>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProvidePaginator>
      </ProvideAuth>
    </>
  );
}

export default MyApp;
