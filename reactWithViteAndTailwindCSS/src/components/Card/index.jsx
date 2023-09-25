const Card = (props) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <figcaption className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {props.category}
        </figcaption>
        <img
          src="https://specials-images.forbesimg.com/imageserve/643084e4326800d7e86ba1ae/best-gaming-headsets/960x0.png?fit=scale"
          className="w-full h-full object-cover rounded-lg"
          alt="Produt loading"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{props.productName}</span>
        <span className="text-lg font-medium">${props.productName}</span>
      </p>
    </div>
  );
};

export default Card;
