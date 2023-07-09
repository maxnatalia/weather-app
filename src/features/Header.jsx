const Header = ({ onFormSubmit, city, handleCityChange }) => {
  return (
    <header className="flex items-center justify-center bg-gray-600/50 py-4">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-2 px-2 sm:flex-row"
      >
        <input
          type="text"
          name="city"
          placeholder="Enter city..."
          value={city}
          onChange={handleCityChange}
          className="w-48 rounded-full bg-emerald-100 px-4 py-2
            text-sm transition-all duration-300
            placeholder:text-stone-900 focus:outline-none focus:ring focus:ring-emerald-500
            focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="inline-block rounded-full bg-emerald-400 px-3 py-2
            font-semibold text-stone-800 transition-colors duration-300
           hover:bg-emerald-300 focus:bg-emerald-300 focus:outline-none focus:ring
            focus:ring-emerald-300 focus:ring-offset-2"
        >
          Search city
        </button>
      </form>
    </header>
  );
};

export default Header;
