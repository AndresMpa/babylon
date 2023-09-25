import { useEffect, useState } from "react";

import Card from "../../components/Card";

function Home() {
  const URL = "https://api.escuelajs.co/api/v1/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((rawResponse) => rawResponse.json())
      .then((response) => setProducts(response));
  }, []);

  const productsToRender = products.map((product, index) => (
    <Card key={index} props={product} />
  ));

  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">{productsToRender}</div>
    </>
  );
}

export default Home;
