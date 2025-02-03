import { useEffect, useState } from "react";

import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { AddSearch } from "../ReduxToolkit/Slices/CartSlice";

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleClick }) => {
  const { cart } = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  const [timeDate, setTimeDate] = useState({ time: "", date: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDate((prev) => {
        const date = new Date();
        return {
          time: date.toLocaleTimeString("en-us", {
            // timeZone: "Asia/Dhaka",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }),
          date: date.toLocaleDateString("en-us", {
            // timeZone: "Asia/Dhaka",
            weekday: "long",
            year: "numeric",
            day: "numeric",
            month: "long",
          }),
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex gap-6 flex-col md:flex-row md:items-center  md:justify-between ">
      <div className="md:w-[380px]">
        <div className="flex gap-5">
          <div className="text-orange-700 font-semibold">{timeDate.date}</div>
          <div className="text-gray-600 font-semibold">{timeDate.time}</div>
        </div>
        <h1 className="text-3xl font-semibold text-stone-500">
          Taste<span className="text-orange-400">&</span>
          <span className="text-zinc-400">Enjoy</span>
        </h1>
      </div>
      <div>
        <input
          name="search"
          type="search"
          aria-label="Search items"
          onChange={(e) => dispatch(AddSearch(e.target.value))}
          // value={search}
          className="w-full md:w-[280px]  border border-black p-2 rounded-md"
          placeholder="Search...."
        />
      </div>
      <div
        className={`${
          cart.length > 0 ? "animate-customBounce" : ""
        }  relative shadow-xl bg-slate-100 shadow-slate-100 w-[44px] p-[5px] rounded-full `}
      >
        <TiShoppingCart
          onClick={handleClick}
          size={32}
          className="cursor-pointer"
        />
        <h2 className="absolute left-7 top-[-10px] text-sm  text-center bg-yellow-300 font-bold rounded-full px-[5px] border border-gray-700">
          {cart.length}
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
