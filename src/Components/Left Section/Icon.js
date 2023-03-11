import "./Icon.css";
import weatherIcon from "../../Icons/cloud-sun.svg";
const Icon = () => {
  return (
    <div class="Icon">
      <img src={weatherIcon} alt="weather icon" />
    </div>
  );
};
export default Icon;
