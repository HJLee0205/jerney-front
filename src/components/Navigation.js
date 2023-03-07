import React from "react";
import {Link} from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
    return (
        <div className="nav_con">
            <Link to="/">Home</Link>
            <Link to={'/about'} state={"hello"}>
                About
            </Link>
        </div>
    )

}

export default Navigation;