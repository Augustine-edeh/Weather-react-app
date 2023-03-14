import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="LandingPage">
      <div class="title">Weather App</div>
      <hr class="hr-1" />
      <section class="lower-sect">
        <input type="search" class="input" placeholder="Enter city name" />
        <div class="divider">
          <hr class="hr-2" />
          <span>or</span>
          <hr class="hr-2" />
        </div>
        <button type="button" class="get-location_button">
          Get weather for Device Location
        </button>
      </section>
    </section>
  );
};
export default LandingPage;
