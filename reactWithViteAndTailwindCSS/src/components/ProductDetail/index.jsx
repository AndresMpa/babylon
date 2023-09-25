const ProductDetail = () => {
  return (
    <aside className="flex flex-col fixed right-2 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-90px)]">
      <article className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>X</button>
      </article>
    </aside>
  );
};

export default ProductDetail;
