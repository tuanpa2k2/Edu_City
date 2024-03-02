import arow from "../../assets/dark-arrow.png";
import "./HeroComp.scss";

const HeroComp = () => {
  return (
    <div className="container_hero hero">
      <div className="hero_text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed
          to excel in the dynamic field of education
        </p>
        <button className="btn">
          Explore more <img src={arow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeroComp;
