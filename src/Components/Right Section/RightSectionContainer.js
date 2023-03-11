import CitySearch from "./CitySearch";
import ErrorMessage from "./ErrorMessage";
import Location from "./Location";
import "./RightSectionContainer.css";
const RightSectionContainer = () => {
  return (
    <section className="Right-section">
      <CitySearch />
      <ErrorMessage />
      <Location />
    </section>
  );
};
export default RightSectionContainer;
