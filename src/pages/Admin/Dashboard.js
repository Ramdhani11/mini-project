import React, { useEffect, useState } from "react";
import { TabTitle } from "../../component/Title";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { deleteShoes, getAllShoes } from "../../axios/AllSlice";
import NavbarA from "../../component/NavbarA";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  TabTitle("Admin Page");
  const [all, setAll] = useState([]);
  useEffect(() => {
    getAllShoes((result) => {
      setAll(result.data.shoes);
    });
  }, []);
  const navigate = useNavigate();
  const removeshoes = (id) => {
    const removeData = [...all].filter((data) => data.id !== id);
    setAll(removeData);
    // deleteShoes(id);
  };
  return (
    <>
      <NavbarA />
      <div className="container">
        <div className="admin-home">
          <div className="main">
            <div className="list">
              <h3>Data Sepatu</h3>
              <button onClick={() => navigate("/add")}>Tambah Sepatu</button>
              {all
                ? all.map((data) => {
                    return (
                      <>
                        <div className="flexA" key={data.id}>
                          <div className="detailAd">
                            <img src={data.images} alt="" />
                            <div className="subDetail">
                              <h4>{data.merek}</h4>
                              <p>{data.deskripsi}</p>
                              <h5>Rp. {data.harga}</h5>
                            </div>
                          </div>
                          <div className="action">
                            <AiOutlineDelete
                              onClick={() => removeshoes(data.id)}
                              className="dele"
                            />
                            <AiOutlineEdit className="edie" />
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })
                : "loading"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
