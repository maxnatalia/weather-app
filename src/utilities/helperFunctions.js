import { format, fromUnixTime } from 'date-fns';

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const convertToCelsius = (tempKelvin) => (tempKelvin - 273.15).toFixed(2);

export const convertToLocalTime = (time) => format(fromUnixTime(time), 'HH:mm');

export const convertMetersToKilometers = (meters) => meters / 1000;
