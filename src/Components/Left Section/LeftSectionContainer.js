import "./LeftSectionContainer.css";
import Title from "./Title";
import Icon from "./Icon";
import Temperature from "./Temperature";
import TemperatureDescription from "./TemperatureDescription";
import AdditionalInformation from "./AdditionalInformation";
import LeftSectionTop from "./LeftSectionTop";
const LeftSection = () => {
  return (
    <section className="Left-section">
      <LeftSectionTop>
        <Title />
        <Icon />
        <Temperature />
        <TemperatureDescription />
      </LeftSectionTop>
      <AdditionalInformation />
    </section>
  );
};
export default LeftSection;
