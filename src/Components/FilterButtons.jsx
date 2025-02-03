import { useEffect, useState } from "react";
import FoodData from "../assets/FoodData/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { AddCategory } from "../ReduxToolkit/Slices/CartSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.cartList.category);
  // const catagoriButtons = ["Lunch", "Breakfast", "Dinner", "Snacks"];
  const [categories, setCategories] = useState([]);
  const FoodCategories = Array.from(
    new Set(FoodData.map((item) => item.category))
  );
  useEffect(() => {
    setCategories(FoodCategories);
    console.log(FoodCategories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold text-stone-500">Choose Your Food</h1>
      <div className="flex gap-2 mt-2 flex-wrap">
        <button
          value={"All"}
          onClick={() => dispatch(AddCategory("All"))}
          className={`${
            selectedCategory === "All" && "bg-green-500 "
          } shadow-md font-semibold text-gray-600 hover:bg-green-400 border-gray-400 hover:text-white hover:border-gray-200 px-3 rounded-md border`}
        >
          All
        </button>
        {categories.map((b, i) => {
          return (
            <button
              key={i}
              value={b}
              onClick={() => dispatch(AddCategory(b))}
              className={`${
                selectedCategory === b && "bg-green-500 border-gray-400"
              } shadow-md font-semibold text-gray-600 hover:bg-green-400 border-gray-400 hover:text-white  hover:border-gray-200 px-3 rounded-md border `}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
