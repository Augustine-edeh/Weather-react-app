import LeftSectionContainer from "../Left Section/LeftSectionContainer";
import RightSectionContainer from "../Right Section/RightSectionContainer";
import LandingPage from "../Landing Page/LandingPage";
import "./OverallContainer.css";

const OverallContainer = () => {
  if (false) {
    return (
      <main className="Main">
        <LeftSectionContainer />
        <RightSectionContainer />
      </main>
    );
  } else {
    return <LandingPage />;
  }
  // return (
  //
  // );
};
export default OverallContainer;
