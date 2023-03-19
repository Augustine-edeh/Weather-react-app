import { useState } from "react";
import LeftSectionContainer from "../Left Section/LeftSectionContainer";
import RightSectionContainer from "../Right Section/RightSectionContainer";
import LandingPage from "../Landing Page/LandingPage";
import "./OverallContainer.css";

const OverallContainer = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const weathergotten = (data) => {
    console.log(data);
    setWeatherData(data);
    setGetWeatherSuccess(true);
  };

  const [getWeatherSuccess, setGetWeatherSuccess] = useState(false);

  if (getWeatherSuccess) {
    return (
      <main className="Main">
        <LeftSectionContainer weatherData={weatherData} />
        <RightSectionContainer />
      </main>
    );
  } else {
    return <LandingPage onGetWeather={weathergotten} />;
  }
  // return (
  //
  // );
};
export default OverallContainer;
