const Footer = () => {
  return (
    <footer className="py-6 text-center text-lg text-emerald-900">
      <p>
        Data dowloaded from{" "}
        <a
          className="font-extrabold hover:text-emerald-100"
          href="https://openweathermap.org/"
          target="_blank"
          rel="noreferrer"
          title="Open API"
        >
          OpenWeatherAPI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
