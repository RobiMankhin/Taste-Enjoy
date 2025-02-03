import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const OrderWithoutItem = ({ component }) => {
  const items = useSelector((i) => i.cartList.cart);
  return items.length > 0 ? component : <Navigate to="/failed" />;
};

export default OrderWithoutItem;
