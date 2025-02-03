import { useSelector } from "react-redux";

import InsideCartItems from "./InsideCartItems";

const CartItems = () => {
  const { cart } = useSelector((state) => state.cartList);

  return (
    <div className="flex flex-col gap-3 p-1 ">
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty!</div>
      ) : (
        cart.map((item, index) => (
          <InsideCartItems
            key={index}
            img={item.img}
            id={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        ))
      )}
    </div>
  );
};

export default CartItems;
