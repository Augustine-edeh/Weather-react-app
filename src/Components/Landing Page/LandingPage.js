import "./LandingPage.css";

const LandingPage = () => {
  // || Prevent default-form-submission  function
  const preventFormSubmit = () => {
    document
      .querySelector(".city-search__form")
      .addEventListener("submit", (e) => e.preventDefault());
  };

  const getDeviceLocation = () => {
    // || Callback function for successful retrieval of device position
    const locationSuccessCallback = (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
    };

    // || Callback function for unsuccessful retrieval of device position
    const locationErrorCallback = (err) => {
      console.log(`####: ${err.message}`);
    };

    // || Getting device location (Latitude and Longitude function) Function
    navigator.geolocation.getCurrentPosition(
      locationSuccessCallback,
      locationErrorCallback
    );
  };

  const onCountrySearchHandler = () => {
    // || Preventing the default submit event of the search-form
    preventFormSubmit();
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
        <button
          typae="button"
          className="get-location_button"
          onClick={getDeviceLocation}
        >
          Get weather for Device Location
        </button>
      </section>
    </section>
  );
};
export default LandingPage;
