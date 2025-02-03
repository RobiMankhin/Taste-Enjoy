import { useDispatch } from "react-redux";

import { AddToCart } from "../ReduxToolkit/Slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const FoodCart = ({ img, name, desc, price, rating, category, id }) => {
  const showAddToCartToast = () => {
    toast.success(`${name} added to cart! 🛒`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const dispatch = useDispatch();
  const maxLength = 60;
  return (
    <div className="w-[270px] mt-5 bg-white rounded-xl p-3 items-center flex gap-4 flex-col">
      <div className=" ">
        <img
          className="w-auto hover:scale-110 duration-300 h-[130px]"
          alt="burger"
          src={img}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 justify-between">
          <h1 className="text-lg h-[54px] font-semibold text-gray-700">
            {name}
          </h1>
          <h1 className="w-[90px] text-sm font-semibold text-orange-600">
            {price} taka
          </h1>
        </div>
        <div className="font-semibold text-sm text-gray-700">
          {desc.slice(0, maxLength)}
          {desc.length > maxLength && "..."}
        </div>
        <div className="flex items-center justify-between">
          <h1 className=" font-semibold w-4 h-4 items-center gap-1 flex">
            <img alt="burger" src="/src/assets/star.png" />
            {rating}
          </h1>
          <button
            onClick={() => {
              dispatch(AddToCart({ id, name, price, rating, img }));
              showAddToCartToast();
            }}
            className="text-sm font-semibold px-1 rounded-md hover:bg-green-600 bg-green-500"
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* ToastContainer to render toasts */}
      <ToastContainer />
    </div>
  );
};

export default FoodCart;
