import "./LeftSectionContainer.css";
import Title from "./Title";
import Icon from "./Icon";
import Temperature from "./Temperature";
import TemperatureDescription from "./TemperatureDescription";
import AdditionalInformation from "./AdditionalInformation";
const LeftSection = (props) => {
  return (
    <>
      <section className="Left-section">
        <div className="Left-Section__top">
          <Title onBack={props.onBackAction} />
          <Icon src={props.weatherData.weather[0].icon} />
          <div className="Left-section__flex">
            <Temperature temperature={props.weatherData.main.temp} />
            <TemperatureDescription
              temperatureDescription={props.weatherData.weather[0].description}
            />
          </div>
        </div>
        <AdditionalInformation
          humidity={props.weatherData.main.humidity}
          windSpeed={props.weatherData.wind.speed}
        />
      </section>
    </>
  );
};
export default LeftSection;
