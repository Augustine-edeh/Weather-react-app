import "./AdditionalInformation.css";

const AdditionalInformation = (props) => {
  return (
    <div className="AdditionalInformation">
      <div className="flex-elements">({props.windSpeed}Km/hr) Windspeed</div>
      <div className="flex-elements">({props.humidity}%) Humidity</div>
    </div>
  );
};
export default AdditionalInformation;
