import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { getCart } from "../axios/AllSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    getCart((result) => {
      setCount(result.data.cart);
    });
  }, []);
  if (count != null && count !== undefined) {
    return (
      <div className="Navbar">
        <nav>
          <Link className="label" to={"/"}>
            UniqueShoes
          </Link>
          <Link className="icon-cart" to={"/cart"}>
            <BiCart />
          </Link>
        </nav>
      </div>
    );
  } else {
    return null;
  }
};

export default Navbar;
