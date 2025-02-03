import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Page not found!</p>
      <Link className="rounded-md bg-slate-300 px-1" to={"/"}>
        Go back to Home
      </Link>
    </div>
  );
};

export default Notfound;
