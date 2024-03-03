import "./TitleComp.scss";

// eslint-disable-next-line react/prop-types
const TitleComp = ({ subTitle, title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <span>{subTitle}</span>
    </div>
  );
};

export default TitleComp;
