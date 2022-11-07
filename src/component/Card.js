import React from "react";
import { BiStore } from "react-icons/bi";
import { Link } from "react-router-dom";
const Card = (props) => {
  const data = props.data;
  return data ? (
    data.map((shoes) => {
      const { images, id, harga, merek } = shoes;
      let formated = new Intl.NumberFormat().format(harga);
      return (
        <Link className="links" to={`/detail/${id}`} key={id}>
          <div className="card">
            <div className="image">
              <img src={images} alt="" />
            </div>
            <div className="card-content">
              <h4 className="">{merek}</h4>
              <h4 className="harga">Rp {formated}</h4>
              <div className="store">
                <i>
                  <BiStore />
                </i>
                <small>Tasikmalaya</small>
              </div>
            </div>
          </div>
        </Link>
      );
    })
  ) : (
    <div>Loading</div>
  );
};

export default Card;
