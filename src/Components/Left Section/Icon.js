import "./Icon.css";
import weatherIcon from "../../Icons/cloud-sun.svg";
const Icon = () => {
  return (
    <div className="Icon">
      <img src={weatherIcon} alt="weather icon" />
    </div>
  );
};
export default Icon;
