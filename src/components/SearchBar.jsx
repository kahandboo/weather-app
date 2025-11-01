import React, { useState } from 'react'
import '../styles/SearchBar.css'

export function SearchBar({ string, setString, handleClick }) {
    return(
        <div className="container-searchbar">
            <div className="search-box">
                <input
                    id = "searchInput"  
                    type="search"
                    placeholder="검색어를 입력하세요."
                    value={string}
                    onChange={(e) => setString(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleClick();
                    }}
                />
                <button 
                className='search-button'
                onClick={handleClick}>검색</button>
            </div>
        </div>
    )
}

export default SearchBar;