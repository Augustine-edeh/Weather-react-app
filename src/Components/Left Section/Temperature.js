import "./Temperature.css";

const Temperature = (props) => {
  return (
    <div className="Temperature">
      <p>
        <span>{props.temperature.toFixed()}&deg;</span>C
      </p>
    </div>
  );
};
export default Temperature;
