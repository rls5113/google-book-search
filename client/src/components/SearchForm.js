import React from "react";
import "./../index.css";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Google Books</h3>
            <form id="bookSearch">
            <label htmlFor="bookInput" form="booSearch">Search</label>
            <input type="text" name="bookInput" id="bookInput" form="bookSearch" placeholder="Book Title" required onChange={(ev) => props.handleChange(ev)}/>
            <button type="submit" onClick={(ev) => props.handleSearchClick(ev)}>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;