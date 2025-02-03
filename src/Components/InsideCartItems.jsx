import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  RemoveFromCart,
} from "../ReduxToolkit/Slices/CartSlice";

// eslint-disable-next-line react/prop-types
const InsideCartItems = ({ img, id, name, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex bg-slate-30 items-center gap-1 p-1 rounded-md shadow-lg w-[280px] ">
      <img className="w-[80px] h-[60px] rounded-lg" alt="burger" src={img} />

      <div className="flec flex-col h-[74px] ">
        <div className="flex h-[40px] justify-between items-center w-[190px]">
          <h2 className="text-sm font-semibold">{name}</h2>

          <MdDelete
            onClick={() => {
              dispatch(RemoveFromCart(id));
            }}
            className="size-5 cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mt-2 w-[190px]">
          <h2 className="text-sm text-orange-500 font-semibold">{price}</h2>
          <div className="flex items-center text-sm gap-3 font-semibold">
            <FaMinus
              onClick={() => dispatch(decreaseQty(id))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 p-1 cursor-pointer hover:border-none text-xl rounded-lg transition-all ease-linear "
            />
            <span>{qty}</span>
            <FaPlus
              onClick={() => dispatch(increaseQty(id))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 p-1 cursor-pointer hover:border-none text-xl rounded-lg transition-all ease-linear "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCartItems;
