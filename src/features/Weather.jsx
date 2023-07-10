import { MdLocationPin, MdVisibility } from "react-icons/md";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { FaWind } from "react-icons/fa";
import { BsDropletFill, BsCloudsFill } from "react-icons/bs";
import {
  convertToCelsius,
  convertToLocalTime,
  convertMetersToKilometers,
} from "../utilities/helperFunctions";

const Weather = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2 px-4 py-2 text-3xl text-emerald-900">
        <div className="flex items-center font-thin md:text-5xl">
          <MdLocationPin />
          <p>{data.name}</p>
        </div>

        <div className="self-end px-4 py-2 text-2xl font-semibold md:text-3xl">
          <div className="flex items-center gap-2">
            <GiSunrise />
            <p>{convertToLocalTime(data.sys.sunrise)}</p>
          </div>
          <div className="flex items-center gap-2">
            <GiSunset />
            <p>{convertToLocalTime(data.sys.sunset)}</p>
          </div>
        </div>
      </div>

      <div
        className="m-3 flex w-[300px] flex-1 flex-col
                items-center justify-center gap-4 self-center rounded-full
               bg-gray-600/50 p-6 text-emerald-200"
      >
        <p className="text-5xl font-extrabold ">
          {convertToCelsius(data.main.temp)}
          &deg;C
        </p>
        <p>
          <span>Feels like:</span>{" "}
          <span className="text-xl font-bold ">
            {convertToCelsius(data.main.feels_like)}
            &deg;C
          </span>
        </p>
        <p className="self-center uppercase">{data.weather[0].description}</p>
        <p className="flex items-center gap-2">
          <BsCloudsFill />
          Cloudiness: {data.clouds.all}%
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 divide-y divide-emerald-300 bg-gray-600/50 p-4 tracking-widest text-emerald-200">
        <p>Pressure: {data.main.pressure}hPa</p>
        <div className="flex items-center gap-2">
          <BsDropletFill />
          <p>Humidity: {data.main.humidity}%</p>
        </div>
        <div className="flex items-center gap-2">
          <MdVisibility />
          <p>Visibility: {convertMetersToKilometers(data.visibility)} km</p>
        </div>
        <div className="flex items-center gap-2">
          <FaWind />
          <p>Wind Speed: {data.wind.speed}</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
