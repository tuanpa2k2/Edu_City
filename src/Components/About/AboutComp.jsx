// eslint-disable-next-line no-unused-vars
import React from "react";

import "./AboutComp.scss";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import TitleComp from "../Title/TitleComp";

const AboutComp = () => {
  return (
    <div className="about_container">
      <div className="about_left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about_right">
        <TitleComp title="GIỚI THIỆU VỀ ĐẠI HỌC" subTitle="Nuôi dưỡng các nhà lãnh đạo của ngày mai ngay hôm nay" />
        <p>
          Bắt tay vào hành trình giáo dục mang tính thay đổi với các chương trình giáo dục toàn diện của trường đại học
          của chúng tôi. Của chúng tôi chương trình giảng dạy tiên tiến được thiết kế để trang bị cho học sinh những
          kiến thức, kỹ năng và kinh nghiệm cần thiết để xuất sắc trong lĩnh vực giáo dục năng động.
        </p>
        <p>
          Với trọng tâm là đổi mới, học tập thực hành và cố vấn cá nhân hóa, các chương trình của chúng tôi chuẩn bị cho
          các nhà giáo dục đầy tham vọng tạo ra tác động có ý nghĩa trong lớp học, trường học và cộng đồng.
        </p>
        <p>
          Cho dù bạn mong muốn trở thành giáo viên, quản trị viên, cố vấn hay lãnh đạo giáo dục, các chương trình đa
          dạng của chúng tôi sẽ mang đến lộ trình hoàn hảo để bạn đạt được mục tiêu và phát huy toàn bộ tiềm năng của
          mình trong việc định hình tương lai giáo dục.
        </p>
      </div>
    </div>
  );
};

export default AboutComp;
