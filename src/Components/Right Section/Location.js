import "./Location.css";
import geoIcon from "../../Icons/geo-alt.svg";

const Location = (props) => {
  return (
    <div class="Location">
      <img src={geoIcon} alt="geo-icon" />
      <span class="city">{props.location}</span>
    </div>
  );
};
export default Location;
