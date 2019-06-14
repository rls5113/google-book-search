import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Google Books</h3>
            <form id="bookSearch">
            <label htmlFor="bookInput" form="booSearch">Search</label>
            <input type="text" name="bookInput" id="bookInput" form="bookSearch" placeholder="Book Title" required onChange={(e) => props.handleChange(e)}/>
            <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;