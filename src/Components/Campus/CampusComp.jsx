// eslint-disable-next-line no-unused-vars
import React from "react";
import TitleComp from "../Title/TitleComp";
import img_gallery_1 from "../../assets/gallery-1.png";
import img_gallery_2 from "../../assets/gallery-2.png";
import img_gallery_3 from "../../assets/gallery-3.png";
import img_gallery_4 from "../../assets/gallery-4.png";
import arow from "../../assets/white-arrow.png";

import "./CampusComp.scss";

const CampusComp = () => {
  return (
    <div className="container_campus">
      <TitleComp title="Phòng trưng bày" subTitle="Thư viện ảnh sinh viên" />
      <div className="campus_img">
        <img src={img_gallery_1} alt="" />
        <img src={img_gallery_2} alt="" />
        <img src={img_gallery_3} alt="" />
        <img src={img_gallery_4} alt="" />
      </div>
      <button className="btn btn_campus">
        Explore more <img src={arow} alt="" />
      </button>
    </div>
  );
};

export default CampusComp;
