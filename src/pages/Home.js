import React from "react";
import { Navbar } from "../component";
import { TabTitle } from "../component/Title";
const Home = (props) => {
  TabTitle("Unique Shoes");
  return (
    <>
      <Navbar />
      <div className="top">
        <div className="container">
          <div className="carousel">ini Carousel</div>
          <div className="home">
            {props.side}
            <div className="main-content">
              {props.content}
              {/* <Routes>
              <Route path="/" element={<AllContent />} />
              <Route path="dashboard">
                <Route path="pria" element={<MenContent />} />
                <Route path="wanita" element={<WomenContent />} />
              </Route>
            </Routes> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
