import { Link } from "react-router-dom";
const NavbarA = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link className="label" to={"/admin"}>
          AdminShoes
        </Link>
      </nav>
    </div>
  );
};

export default NavbarA;
