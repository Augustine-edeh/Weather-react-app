import "./Location.css";
import geoIcon from "../../Icons/geo-alt.svg";

const Location = () => {
  return (
    <div class="Location">
      <img src={geoIcon} alt="geo-icon" />
      <span class="city">{`Abuja, Nigeria`}</span>
    </div>
  );
};
export default Location;
