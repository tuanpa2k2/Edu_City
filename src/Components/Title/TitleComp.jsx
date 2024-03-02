import "./TitleComp.scss";

// eslint-disable-next-line react/prop-types
const TitleComp = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p>{title}</p>
      <span>{subTitle}</span>
    </div>
  );
};

export default TitleComp;
