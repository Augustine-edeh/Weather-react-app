import "./Location.css";
import geoIcon from "../../Icons/geo-alt.svg";

const Location = (props) => {
  return (
    <div className="Location">
      <img src={geoIcon} alt="geo-icon" />
      <span className="city">{props.location}</span>
    </div>
  );
};
export default Location;
