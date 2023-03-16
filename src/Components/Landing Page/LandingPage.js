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

    // || Logging the city-input value to the console
    const cityName = document.querySelector(".input").value;

    // || API Key
    const APIKEY = "3ad3ba1e7be894670b88f65bf82f63d9";

    // || Fetching weather data
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;
    fetch(weatherURL)
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
