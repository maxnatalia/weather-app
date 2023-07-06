import axios from "axios";

export const apiKey = "6a480d56f34f013ad780d32e2672b0b5";

export const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    headers: {}
});