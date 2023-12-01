import CitySearch from "./CitySearch";
import ErrorMessage from "./ErrorMessage";
import Location from "./Location";
import "./RightSectionContainer.css";
const RightSectionContainer = (props) => {
  const updateCountryHandler = (param) => {
    props.onUpdateCountryName(param);
  };

  return (
    <section className="Right-section">
      <CitySearch
        logger={props.weather}
        onUpdateCountry={updateCountryHandler}
      />
      <ErrorMessage />
      <Location location={props.location} />
    </section>
  );
};
export default RightSectionContainer;
