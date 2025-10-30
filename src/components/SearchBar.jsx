import React, { useState } from 'react'
import '../styles/SearchBar.css'

export function SearchBar() {
    const [string, setString] = useState("검색어를 입력하세요.");
    return(
        <div className="container-searchbar">
            <div className="search-box">
                <input
                    id = "searchInput"  
                    type="search"
                    value={string}
                    onChange={(e) => setString(e.target.value)}
                    onClick={() => setString("")}
                />
                <button className='search-button'>검색</button>
            </div>
        </div>
    )
}

export default SearchBar;