import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function wstart() {
    return (
        <div className="start-section">
            <div className="start">
                <Link to="/game">Start</Link>
            </div>    
        </div>
    );
}

export default wstart;