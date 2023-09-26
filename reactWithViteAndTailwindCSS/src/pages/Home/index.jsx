import { useContext } from "react";

import { ShopingCardContext } from "../../context";

import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const shoppingContext = useContext(ShopingCardContext);

  const onSearch = ({ target: { value } }) =>
    shoppingContext.setSearchValue(value);

  const productsToRender =
    shoppingContext.searchValue?.length > 0
      ? shoppingContext.filteredProducts.map((product, index) => (
          <Card key={index} props={product} />
        ))
      : shoppingContext.products.map((product, index) => (
          <Card key={index} props={product} />
        ));
  const noMatches =
    shoppingContext.filteredProducts.length === 0 &&
    shoppingContext.searchValue?.length > 0 ? (
      <p>No matches for &quot;{shoppingContext.searchValue}&quot;</p>
    ) : (
      ""
    );

  return (
    <>
      <input
        type="text"
        onChange={onSearch}
        value={shoppingContext.searchValue}
        placeholder="Look for something new?"
        className="w-80 p-3 mb-4 rounded-lg border border-black focus:outline-black"
      />
      {noMatches}

      <article className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {productsToRender}
      </article>

      <ProductDetail></ProductDetail>
    </>
  );
}

export default Home;
