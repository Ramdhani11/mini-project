import React, { useEffect, useState } from "react";
import { getMenShoes } from "../axios/AllSlice";
import Card from "./Card";
import { TabTitle } from "./Title";

const MenContent = () => {
  TabTitle("Sepatu Pria");
  const [man, setMan] = useState([]);
  useEffect(() => {
    getMenShoes((result) => {
      setMan(result.data.shoes);
    });
  }, []);
  return (
    <>
      <h3>Sepatu Pria</h3>
      <hr />
      <div className="card-container">
        <Card data={man} />
      </div>
    </>
  );
};

export default MenContent;
