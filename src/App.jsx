import { useFetchWeather } from "./useFetchWeather";
import Header from "./features/Header";
import Main from "./features/Main";
import Loading from "./features/Loading";
import Error from "./features/Error";
import Weather from "./features/Weather";
import Footer from "./features/Footer";
import useNewCity from "./useNewCity";

const App = () => {
  const { newCity, city, onFormSubmit, handleCityChange } = useNewCity();
  const { data, isFetching, isError } = useFetchWeather(newCity);

  return (
    <div className="mx-auto flex min-h-screen  max-w-screen-2xl flex-col bg-main">
      <Header
        city={city}
        handleCityChange={handleCityChange}
        onFormSubmit={onFormSubmit}
      />
      <Main>
        {isFetching && <Loading />}
        {isError && <Error />}
        {data && <Weather data={data} />}
      </Main>
      <Footer />
    </div>
  );
};

export default App;
