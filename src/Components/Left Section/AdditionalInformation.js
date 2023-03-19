import "./AdditionalInformation.css";

const AdditionalInformation = (props) => {
  return (
    <div className="AdditionalInformation">
      <div class="flex-elements">({props.windSpeed}Km/hr) Windspeed</div>
      <div class="flex-elements">({props.humidity}%) Humidity</div>
    </div>
  );
};
export default AdditionalInformation;
