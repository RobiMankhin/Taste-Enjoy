import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
const Success = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center h-[90vh] justify-center text-lg font-semibold">
      {load ? (
        <PacmanLoader
          color="#e34d4d"
          cssOverride={{}}
          margin={5}
          size={66}
          speedMultiplier={1}
        />
      ) : (
        <div className="flex flex-col items-center text-3xl font-semibold gap-3">
          <h2 className="text-green-700">please Wait...</h2>

          <h2 className="text-gray-600">Your order has been placed</h2>
        </div>
      )}
    </div>
  );
};

export default Success;
