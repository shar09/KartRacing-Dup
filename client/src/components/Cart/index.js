import React from "react";
import "./style.css";
import Nav from "../Nav";

function Cart() {
    return(
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Select Cart</p>
            </div>
        </div>
    );
}

export default Cart;