import arow from "../../assets/dark-arrow.png";
import "./HeroComp.scss";

const HeroComp = () => {
  return (
    <div className="container_hero hero">
      <div className="hero_text">
        <h1>Chúng tôi đảm bảo giáo dục tốt hơn cho một thế giới tốt đẹp hơn</h1>
        <p>
          Chương trình giảng dạy tiên tiến của chúng tôi được thiết kế để trang bị cho sinh viên kiến thức, kỹ năng và
          kinh nghiệm cần thiết để vượt trội trong lĩnh vực giáo dục năng động
        </p>
        <button className="btn">
          Explore more <img src={arow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeroComp;
