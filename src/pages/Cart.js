import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../axios/AllSlice";
import { Navbar } from "../component";
import { TabTitle } from "../component/Title";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  TabTitle("Keranjang");
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getCart((result) => {
      setDatas(result.data.cart);
    });
  }, []);
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/detail/${id}`);
  };
  const removeCart = (id) => {
    const removeData = [...datas].filter((data) => data.id !== id);
    setDatas(removeData);
    // deleteShoes(id);
  };
  if (datas != null) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="cart_das">
            <div className="wrapper">
              <h3>Keranjang</h3>
              {datas.map((data) => {
                const { id, merek, harga, id_shoes, images, ukuran } = data;
                let formated = new Intl.NumberFormat().format(harga);

                return (
                  <div className="list" key={id}>
                    <img
                      onClick={() => clickHandler(id_shoes)}
                      src={images}
                      alt=""
                    />
                    <div className="rinci">
                      <div
                        className="title-rinci"
                        onClick={() => clickHandler(id_shoes)}
                      >
                        {merek}
                      </div>
                      <span className="nomor"> {ukuran}</span>
                      <h4>Rp {formated}</h4>
                    </div>
                    <AiOutlineDelete
                      onClick={() => removeCart(id)}
                      className="dele"
                    />
                  </div>
                );
              })}
            </div>
            <div className="rincian">
              <h4>Total : </h4>
              <button>Check Out</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container">
        <div className="n-content">Keranjang Anda masih kosong!</div>
      </div>
    );
  }
};
export default Cart;
