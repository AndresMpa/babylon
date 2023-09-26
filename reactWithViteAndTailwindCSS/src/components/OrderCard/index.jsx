import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = ({ props, deleteHandler }) => {
  const onDeleteHandler = () => deleteHandler(props.id);

  return (
    <section className="flex justify-between items-center w-11/12 my-2">
      <article className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={props.images ? props.images[0] : ""}
            alt={props.title}
          />
        </figure>
        <p className="text-sm font-light">{props.title}</p>
      </article>
      <article className="flex ">
        <h3 className="text-lg font-medium">${props.price}</h3>
        {deleteHandler && (
          <button onClick={onDeleteHandler} className="cursor-pointer">
            <XMarkIcon className="h-6 w-6 text-black" />
          </button>
        )}
      </article>
    </section>
  );
};

export default OrderCard;
