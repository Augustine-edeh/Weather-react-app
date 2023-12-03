import { useState } from "react";
import CitySearch from "./CitySearch";
import ErrorMessage from "./ErrorMessage";
import Location from "./Location";
import "./RightSectionContainer.css";
const RightSectionContainer = (props) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessageHandler = (message) => {
    setErrorMessage(message);
  };
  const updateCountryHandler = (param) => {
    props.onUpdateCountryName(param);
  };

  const errorHandler = (bol) => {
    setIsError(bol);
  };

  return (
    <section className="Right-section">
      <CitySearch
        logger={props.weather}
        onUpdateCountry={updateCountryHandler}
        onError={errorHandler}
        onErrorMessage={errorMessageHandler}
      />
      {isError ? <ErrorMessage errMessage={errorMessage} /> : null}
      <Location location={props.location} />
    </section>
  );
};
export default RightSectionContainer;
