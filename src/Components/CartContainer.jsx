import { IoIosArrowDropdown } from "react-icons/io";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CartContainer = ({ open, handleClick }) => {
  const { cart } = useSelector((state) => state.cartList);
  const navigate = useNavigate();
  const totalitems = cart.reduce((total, item) => total + item.qty, 0);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <div
      className={`z-50 bg-white fixed right-0 top-[130px] md:top-[64px] border-gray-300 rounded-md border p-2 ${
        open ? "translate-y-0" : "translate-y-[600%]"
      } ease-in-out duration-500 flex flex-col gap-2 items-center`}
    >
      <div className="flex items-center justify-between w-[260px]">
        <h2 className="shadow-lg p-[6px] rounded-md bg-green-600 text-white font-semibold">
          Total items : {totalitems}
        </h2>
        <IoIosArrowDropdown
          onClick={handleClick}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div className="overflow-y-auto max-h-[400px]">
        <CartItems />
      </div>
      <div className="flex  flex-col gap-3">
        <h2 className="font-semibold">Total Amount : {totalAmount} taka</h2>
        <button
          onClick={() => navigate("/success")}
          className="shadow-md font-semibold  bg-green-600 border-green-500 hover:text-gray-300 hover:border-gray-600 text-white  px-3 rounded-md border"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
