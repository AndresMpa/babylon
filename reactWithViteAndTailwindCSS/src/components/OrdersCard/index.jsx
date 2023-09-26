import {
  ChevronDoubleRightIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = ({ props }) => {
  return (
    <section className="flex justify-between items-center px-6 py-4 my-3 mx-auto w-10/12 border border-black rounded-lg">
      <article className="flex flex-col w-full mr-3 text-sm font-light">
        <p className="flex justify-between">
          <CalendarDaysIcon className="my-auto h-5 w-5 mx-2" />
          <span>{props.date}</span>
        </p>
        <p className="flex justify-between">
          <ClockIcon className="my-auto h-5 w-5 mx-2" />
          <span>{props.totalProducts}</span>
        </p>
        <p className="flex justify-between">
          <BanknotesIcon className="my-auto h-5 w-5 mx-2" />
          <span className="font-bold">${props.totalPrice}</span>
        </p>
      </article>
      <article className="mt-3">
        <button>
          <ChevronDoubleRightIcon className="my-auto h-5 w-5 mx-2" />
        </button>
      </article>
    </section>
  );
};

export default OrdersCard;
