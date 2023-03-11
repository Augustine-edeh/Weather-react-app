import "./LeftSectionContainer.css";
import Title from "./Title";
import Icon from "./Icon";
import Temperature from "./Temperature";
import TemperatureDescription from "./TemperatureDescription";
import AdditionalInformation from "./AdditionalInformation";
const LeftSection = () => {
  return (
    <section className="Left-section">
      <div class="Left-Section__top">
        <Title />
        <Icon />
        <div class="Left-section__flex">
          <Temperature />
          <TemperatureDescription />
        </div>
      </div>
      <AdditionalInformation />
    </section>
  );
};
export default LeftSection;
