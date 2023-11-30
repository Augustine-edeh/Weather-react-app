import CitySearch from "./CitySearch";
import ErrorMessage from "./ErrorMessage";
import Location from "./Location";
import "./RightSectionContainer.css";
const RightSectionContainer = (props) => {
  return (
    <section className="Right-section">
      <CitySearch logger={props.weather} />
      <ErrorMessage />
      <Location location={props.location} />
    </section>
  );
};
export default RightSectionContainer;
