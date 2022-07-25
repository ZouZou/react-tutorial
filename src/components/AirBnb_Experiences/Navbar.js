import React from "react";
import airbnblogo from "../../images/airbnb-logo.png";

export default function NavBar() {
    return (
        <nav>
            <img src={airbnblogo} className="nav--logo" />
        </nav>
    )
}