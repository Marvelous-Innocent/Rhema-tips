import { useState } from "react";
import './search.css'

const Search = ({ onEnterKeySearch }) => {
    const [searchText, setSearchText] = useState('')

    const onSearch = () => {
        setSearchText(e.target.value);
    }


    return (
        <div className="searchContainer">
            <div className="searchInput">
                <input 
                type="text"
                onChange={onSearch}
                onKeyDown={onEnterKeySearch}
                value={searchText}
                placeholder="Search Qoutes Here"
                />
            </div>
            <div className="searchHint"></div>
        </div>
    );
}

export default Search;
