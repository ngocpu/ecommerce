import React from "react";
import { Link } from "react-router-dom";
import { banner, shape } from "../../assets";
import banner1 from'../../assets/img/banner3.png'
import banner2 from'../../assets/img/banner4.png'

import "./Banner.css";
export default function Banner() {
  return (
    <div className="slider d-flex justify-content-center position-relative">
      <img src={banner} alt={banner} className='banner' />
      <img src={banner1} alt=""className="position-absolute b1 top-0 end-0" style={{width:'400px'}}/>
      <img src={banner2} alt=""className="position-absolute b2 bottom-0 start-0" style={{width:'500px'}}/>
      <div className="content position-absolute">
        <div className="banner-sub position-reative d-flex justify-content-center">
          <h6 className="position-absolute text-white text-uppercase">
            100% organic foods
          </h6>
          <img src={shape} alt="" />
        </div>
        <div className="content-title">
          <h1 className="mt-4">
            Organic Fruit You Cook{" "}
            <font className="text-effect">
              <span>H</span>
              <span>e</span>
              <span>a</span>
              <span>l</span>
              <span>t</span>
              <span>h</span>
              <span>y</span>
            </font>
          </h1>
          <div className="content-submit d-flex justify-content-center">
            <button className="btn btn-md b-top mt-5">
              <Link to="/product">Shoping now !</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
