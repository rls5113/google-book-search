import React from "react";
import bgImage from "../images/pinkTealGeo.jpg";

const headerStyle = {
    "backgroundImage": `url(${bgImage})`,
    "maxWidth": "100%",
    height: "calc(100 * .17)",
    "backgroundSize": "cover",
    position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Search Google Books API</h1>
        </header>

    );
}

export default Header;