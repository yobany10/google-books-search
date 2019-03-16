import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

function Nav(props) {
    return (
        <nav className="navbar">
        <h4>Google Books</h4>
        <Link to="/search">
        <h4>search</h4>
        </Link>
        <Link to="/saved">
        <h4>saved</h4>
        </Link>
        </nav>
    )
}

export default Nav;