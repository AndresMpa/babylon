import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <p>Testing product id: {productId}</p>
    </div>
  );
};

export default ProductItem;
