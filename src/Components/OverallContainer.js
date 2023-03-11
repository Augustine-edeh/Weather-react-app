import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./OverallContainer.css";

const OverallContainer = () => {
  return (
    <main className="Main">
      <LeftSection />
      <RightSection />
    </main>
  );
};
export default OverallContainer;
