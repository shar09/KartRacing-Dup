import React from "react";
import "./style.css";
import Nav from "../Nav";

function Track() {
    return(
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Select Track</p>
            </div>
        </div>
    );
}

export default Track;