import React, { useEffect, useState } from "react";
import { getAllShoes } from "../axios/AllSlice";
import Card from "./Card";

const AllContent = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    getAllShoes((result) => {
      setAll(result.data.shoes);
    });
  }, []);

  return (
    <>
      <h3>Semua Barang</h3>
      <hr />
      <div className="card-container">
        <Card data={all} />
      </div>
    </>
  );
};

export default AllContent;
