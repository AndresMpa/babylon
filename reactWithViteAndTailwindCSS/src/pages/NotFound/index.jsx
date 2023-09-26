import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function NotFound() {
  return (
    <div className="flex flex-col items-center p-6">
      <ExclamationTriangleIcon className="h-40 w-40 my-6 text-red-500" />

      <h2 className="font-semibold text-2xl text-red-500 my-3">Ops... This pages was not found</h2>
      <p>It seems that there is an error here, try going back using a simple</p>
    </div>
  );
}

export default NotFound;
