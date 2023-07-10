import { useState } from "react";

const useNewCity = () => {
    const [city, setCity] = useState("");
    const [newCity, setNewCity] = useState("Londyn");

    const handleCityChange = e => {
        setCity(e.target.value);
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if (!city) return;
        setNewCity(city);
        setCity("");
    };

    return { handleCityChange, onFormSubmit, newCity, city }
};

export default useNewCity;