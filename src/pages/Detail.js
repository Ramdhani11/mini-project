import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AddCart, getOneShoes } from "../axios/AllSlice";
import { ImLocation } from "react-icons/im";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { TabTitle } from "../component/Title";
import { Navbar } from "../component";

const Detail = () => {
  const [shoes, setshoes] = useState("");
  const param = useParams();
  const navigate = useNavigate();
  const clickHandler = () => {
    AddCart(shoes);
    alert("Berhasil dimasukan ke keranjang");
    navigate("/cart");
  };

  useEffect(() => {
    const id = param.id;
    getOneShoes(id, (result) => {
      setshoes(result.data.shoes[0]);
    });
  }, []);
  TabTitle(shoes.merek);
  let formated = new Intl.NumberFormat().format(shoes.harga);
  return shoes ? (
    <>
      <Navbar />
      <div className="container">
        <div className="detail">
          <div className="image-detail">
            <img src={shoes.images} alt="" />
          </div>
          <div className="deskripsi">
            <div className="title">{shoes.merek}</div>
            <div className="harga">Rp {formated}</div>
            <div className="ukuran">
              <span>Ukuran : </span>
              <span className="nomor"> {shoes.ukuran}</span>
            </div>
            <div className="detail-deskripsi">
              <hr />
              <span>Deskripsi</span>
              <hr />
              <p>{shoes.deskripsi}</p>
            </div>
            <div className="navigation">
              <Link to={"/"} className="kembali">
                Kembali
              </Link>
              <div className="cart" onClick={clickHandler}>
                {" "}
                + Keranjang
              </div>
            </div>
          </div>
          <div className="info-keranjang">
            <div className="header">Unique Shoes</div>
            <div className="info">
              <div className="proses">
                <h3>1 jam</h3>
                <span>Pesanan Diproses</span>
              </div>
              <div className="proses">
                <h3>8.00 - 20.00</h3>
                <span>Jam oprasional toko</span>
              </div>
            </div>
            <div className="des-toko">
              <h4>Informasi Toko</h4>
              <div>
                <small>Email : uniqueshoes_@gmail.com</small>
              </div>

              <div>
                <small>instagram : @uniqueshoes_13</small>
              </div>

              <div>
                <small>
                  <ImLocation /> Kota Tasikmalaya
                </small>
              </div>

              <div>
                <small>
                  <BsFillDoorOpenFill /> Buka Sejak : Oktober 2022
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  );

  // return shoes.map((shoe) => {
  //   return (
  //     <div className="container">
  //       <div className="detail">
  //         <div className="image-detail">
  //           <img src={require(`../images/card/${shoe.images}.jpg`)} alt="" />
  //         </div>
  //         <div className="deskripsi">Deskripsi</div>
  //         <div className="info-keranjang">{shoe.merek}</div>
  //       </div>
  //     </div>
  //   );
  // });
};

export default Detail;
