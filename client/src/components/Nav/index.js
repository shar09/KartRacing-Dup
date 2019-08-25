import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function Nav() {
    return (
        <div className="container-1">
            <div className="nav">
                <div className="racer">
                    <Link to="/racer">Game Setup</Link>
                </div>
                {/* <div className="cart">
                    <Link to="/cart">Cart</Link>
                </div>
                <div className="track">
                    <Link to="/track">Track</Link>
                </div>
                <div className="level">
                    <Link to="/level">Difficulty</Link>
                </div> */}
            </div>
        </div>
    );
}

export default Nav;