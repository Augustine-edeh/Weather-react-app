import LeftSectionContainer from "../Left Section/LeftSectionContainer";
import RightSectionContainer from "../Right Section/RightSectionContainer";
import LandingPage from "../Landing Page/LandingPage";
import "./OverallContainer.css";

const OverallContainer = (props) => {
  const weathergotten = (data) => {
    console.log(data);
  };

  if (false) {
    return (
      <main className="Main">
        <LeftSectionContainer />
        <RightSectionContainer />
      </main>
    );
  } else {
    return <LandingPage onGetWeather={weathergotten} />;
  }
  // return (
  //
  // );
};
export default OverallContainer;
