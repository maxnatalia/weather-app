import { useQuery } from "@tanstack/react-query";
import { apiKey, weatherApi } from "./apiData";
import { wait } from "./helpers/helperFunctions";

export const useFetchWeather = (city) => {

    const getWeather = async () => {
        await wait(3000);

        const { data } = await weatherApi.get(`?q=${city}&appid=${apiKey}`);
        return data;
    };

    const { isLoading, isFetching, isError, data } = useQuery(
        ['weather', city],
        getWeather);

    return { isLoading, isFetching, isError, data };
}