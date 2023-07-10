import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "./utilities/apiData";
import { wait } from "./utilities/helperFunctions";

export const useFetchWeather = (city) => {

    const getWeather = async () => {
        await wait(3000);

        const { data } = await weatherApi.get(`?q=${city}&appid=${import.meta.env.VITE_SOME_KEY}`);
        return data;
    };

    const { isLoading, isFetching, isError, data } = useQuery(
        ['weather', city],
        getWeather);

    return { isLoading, isFetching, isError, data };
}