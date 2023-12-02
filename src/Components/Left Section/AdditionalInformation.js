import "./AdditionalInformation.css";

const AdditionalInformation = (props) => {
  return (
    <div className="AdditionalInformation">
      <div className="flex-elements _1st">
        <span className="data">{props.windSpeed}Km/hr</span>
        <span>Windspeed</span>
      </div>
      <div className="flex-elements">
        <span className="data">{props.humidity}%</span>
        <span>Humidity</span>
      </div>
    </div>
  );
};
export default AdditionalInformation;
