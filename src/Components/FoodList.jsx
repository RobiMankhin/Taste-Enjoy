import { useSelector } from "react-redux";
import FoodData from "../assets/FoodData/FoodData";
import FoodCart from "./FoodCart";

const FoodList = () => {
  const { category: selectedCategory, search } = useSelector(
    (state) => state.cartList
  );
  return (
    <div className="flex gap-6 flex-wrap justify-center md:justify-start">
      {FoodData.filter((food) => {
        const forCategory =
          selectedCategory === "All" || food.category === selectedCategory;
        const forsearch = food.name
          .toLowerCase()
          .includes(search.toLowerCase());
        return forCategory && forsearch;

        // alternative  if (selectedCategory === "All") return true;

        //another alternative return food.category === selectedCategory;
        // if (selectedCategory === "All") return food;
        // else {
        //   return food.category === selectedCategory;
        // }
      }).map((food) => (
        <FoodCart
          key={food.id}
          name={food.name}
          category={food.category}
          desc={food.desc}
          id={food.id}
          img={food.img}
          price={food.price}
          rating={food.rating}
        />
      ))}
    </div>
  );
};

export default FoodList;
