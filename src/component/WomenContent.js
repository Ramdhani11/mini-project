import React, { useEffect, useState } from "react";
import { getWomenShoes } from "../axios/AllSlice";
import Card from "./Card";
import { TabTitle } from "./Title";

const WomenContent = () => {
  TabTitle("Sepatu Wanita");
  const [women, setWomen] = useState([]);
  useEffect(() => {
    getWomenShoes((result) => {
      setWomen(result.data.shoes);
    });
  }, []);
  return (
    <>
      <h3>Sepatu Wanita</h3>
      <hr />
      <div className="card-container">
        <Card data={women} />
      </div>
    </>
  );
};

export default WomenContent;
