import React from "react";

import useGetProduct from "@hooks/useGetProduct";

import ProductItem from "@components/ProductItem";

import "@styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const list = useGetProduct(API)
  return (
    <section className="main-container">
      <div className="ProductList">
        {list.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
