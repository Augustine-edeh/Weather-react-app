import "./Icon.css";
const Icon = ({ src }) => {
  return (
    <div className="Icon">
      <img
        src={`http://openweathermap.org/img/w/${src}.png`}
        alt="weather icon"
      />
    </div>
  );
};
export default Icon;
