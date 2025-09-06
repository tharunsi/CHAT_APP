import { IoSearchSharp } from "react-icons/io5";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search" className="search-input" />
      <button type="submit" className="search-button">
        <IoSearchSharp className="search-icon" />
      </button>
    </form>
  );
};

export default SearchInput;
