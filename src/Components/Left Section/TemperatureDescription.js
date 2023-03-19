import "./TemperatureDescription.css";

const TemperatureDescription = (props) => {
  return (
    <p className="TemperatureDescription">{props.temperatureDescription}</p>
  );
};
export default TemperatureDescription;
