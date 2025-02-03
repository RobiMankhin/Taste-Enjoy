import { Link } from "react-router-dom";

const OrderFailed = () => {
  return (
    <div className="flex flex-col gap-4 items-center h-[50vh] justify-center">
      <div className="text-4xl text-red-600 font-semibold">
        Order Failed. Add an item first...
      </div>
      <Link
        className="bg-green-300 text-gray-800 border border-gray-600 hover:bg-white px-2 rounded-md font-semibold"
        to="/"
      >
        back to home
      </Link>
    </div>
  );
};

export default OrderFailed;
