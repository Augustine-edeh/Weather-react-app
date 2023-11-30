import { useState } from "react";
import LeftSectionContainer from "../Left Section/LeftSectionContainer";
import RightSectionContainer from "../Right Section/RightSectionContainer";
import Home from "../Home/Home";
import "./OverallContainer.css";

const OverallContainer = (props) => {
  const [weatherData, setWeatherData] = useState();
  const [countryName, setCountryName] = useState("");

  const weathergotten = (data) => {
    console.log(data);
    setWeatherData(data);
    setGetWeatherSuccess(true);
  };

  const countryGotten = (countryData) => {
    console.log(countryData);
    setCountryName(countryData);
  };

  const [getWeatherSuccess, setGetWeatherSuccess] = useState(false);

  return getWeatherSuccess ? (
    <main className="Main">
      <LeftSectionContainer weatherData={weatherData} />
      <RightSectionContainer location={`${weatherData.name}, ${countryName}`} />
    </main>
  ) : (
    <Home onGetWeather={weathergotten} onCountryGotten={countryGotten} />
  );
};
export default OverallContainer;
