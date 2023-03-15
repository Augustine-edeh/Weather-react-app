import "./LandingPage.css";

const LandingPage = () => {
  const onCountrySearchHandler = () => {
    // || Fetching weather data
    fetch("https://restcountries.com/v3.1/name/nigeria")
      // https://restcountries.com/v3.1/all
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="LandingPage">
      <div className="LandingPage__title">Weather App</div>
      <hr className="hr-1" />
      <section className="lower-sect">
        <form className="city-search__form">
          <input
            type="search"
            className="input"
            placeholder="Enter city name"
          />
          <button
            type="submit"
            className="city-search__submit"
            onClick={onCountrySearchHandler}
          >
            Search
          </button>
        </form>
        <div className="divider">
          <hr className="hr-2" />
          <span>or</span>
          <hr className="hr-2" />
        </div>
        <button typae="button" className="get-location_button">
          Get weather for Device Location
        </button>
      </section>
    </section>
  );
};
export default LandingPage;
