import Button from "./Button";

const InfoCard = ({ heading, details }) => {
  return (
    <div className="info-card">
      <h3>{heading}</h3>
      <p>{details}</p>
      <Button text="Shop now" />
    </div>
  );
};

export default InfoCard;
