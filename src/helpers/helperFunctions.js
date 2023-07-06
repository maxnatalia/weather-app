export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const convertToCelsius = (tempKelvin) => (tempKelvin - 273.15).toFixed(2);