// import style from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">
        Find contacts by name
        <input
          id="search"
          type="text"
          name="search"
          value={inputValue}
          onChange={onSearch}
        />
      </label>
    </div>
  );
};

export default SearchBox;
