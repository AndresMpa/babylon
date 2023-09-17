import Head from 'next/head';

import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yarn shop</title>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ProductList />
    </>
  );
}
