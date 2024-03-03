// eslint-disable-next-line no-unused-vars
import React from "react";

import "./AboutComp.scss";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const AboutComp = () => {
  return (
    <div className="about_container">
      <div className="about_left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about_right">
        <h2>GIỚI THIỆU VỀ ĐẠI HỌC</h2>
        <span>Nuôi dưỡng các nhà lãnh đạo của ngày mai ngay hôm nay</span>
        <p>
          Bắt tay vào hành trình giáo dục mang tính thay đổi với các chương trình giáo dục toàn diện của trường đại học
          của chúng tôi. Của chúng tôi chương trình giảng dạy tiên tiến được thiết kế để trang bị cho học sinh những
          kiến thức, kỹ năng và kinh nghiệm cần thiết để xuất sắc trong lĩnh vực giáo dục năng động.
        </p>
        <p>
          Với trọng tâm là đổi mới, học tập thực hành và cố vấn cá nhân hóa, các chương trình của chúng tôi chuẩn bị cho
          các nhà giáo dục đầy tham vọng tạo ra tác động có ý nghĩa trong lớp học, trường học và cộng đồng.
        </p>
      </div>
    </div>
  );
};

export default AboutComp;
