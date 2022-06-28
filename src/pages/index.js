import Head from 'next/head';

import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yarn shop</title>
      </Head>
      <ProductList />
    </>
  );
}
