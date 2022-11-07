import { Link } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ position: "sticky", top: "160px" }}>
      <h4>Kategori</h4>
      <hr />
      {SidebarData.map((side) => {
        const path = window.location.pathname;
        if (path === side.path) {
          return (
            <div className="link" key={side.id}>
              <Link to={side.path} className="active">
                <img src={side.imgW} alt="" /> {side.title}
              </Link>
            </div>
          );
        } else {
          return (
            <div className="link" key={side.id}>
              <Link to={side.path}>
                <img src={side.img} alt="" /> {side.title}
              </Link>
            </div>
          );
        }
      })}
      {/* <div className="link">
        <Link to={"/dashboard/pria"}>
          <img src={iconMen} alt="" /> Sepatu Pria
        </Link>
      </div>
      <div className="link">
        <Link to={"/dashboard/wanita"}>
          <img src={iconWomen} alt="" /> Sepatu Wanita
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
