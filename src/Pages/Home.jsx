import { useState } from "react";
import CartContainer from "../Components/CartContainer";
import FilterButtons from "../Components/FilterButtons";
import FoodList from "../Components/FoodList";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-40 px-5 py-4 bg-slate-200 bg-opacity-95">
        <Navbar handleClick={handleClick} />
        <FilterButtons />
      </div>
      <div className="mt-[250px] md:mt-[156px]">
        <FoodList />
        <CartContainer open={open} handleClick={handleClick} />
      </div>
    </>
  );
};

export default Home;
