import React from "react";
import "./style.css";
import Nav from "../Nav";
import Start from "../wstart";

function Level() {
    return(
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Select Difficulty</p>
                <div className="levels">
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
                <button className="button">4</button>
                <button className="button">5</button>
                </div>
            </div>
            <Start />
        </div>
    );
}

export default Level;