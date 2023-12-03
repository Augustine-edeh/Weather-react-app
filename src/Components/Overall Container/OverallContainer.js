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

  const weatherHandler = (arg) => {
    setWeatherData(arg);
    console.log("In the OverAllContainer!!", arg);
  };
  const updateCountryHandler = (country) => {
    console.log("country name changed", country);
    setCountryName(country);
  };

  const backActionHandler = (bol) => {
    setGetWeatherSuccess(bol);
    console.log("In the OverAllContainer");
  };

  const [getWeatherSuccess, setGetWeatherSuccess] = useState(false);

  return getWeatherSuccess ? (
    <main className="Main">
      <LeftSectionContainer
        weatherData={weatherData}
        onBackAction={backActionHandler}
      />
      <RightSectionContainer
        location={`${weatherData.name}${countryName}`}
        onUpdateCountryName={updateCountryHandler}
        weather={weatherHandler}
      />
    </main>
  ) : (
    <main>
      <Home onGetWeather={weathergotten} onCountryGotten={countryGotten} />
    </main>
  );
};
export default OverallContainer;
