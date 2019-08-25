
import React, { Component } from "react";
//import "./style.css";
import "./newstyle.css";
import Elizabeth from "./images/elizabeth.jpg";
import Trump from "./images/trump.jpg";
import Bluecar from "./images/bluecar.jpg";
import Redcar from "./images/redcar.jpg";
import Ovaloffice from "./images/ovaloffice.jpg";
import Nav from "../Nav";
import Wstart from "../wstart";
import Tstart from "../tstart";

// class Racer extends Component {
//     state = {
//         clickedImages: {
//             trump: false,
//             warren: false
//         }
//     };

//     handleClick = name => {
//         console.log(name + " was clicked on")
//         const updatedState = this.state;
//         updatedState.clickedImages[name] = !updatedState.clickedImages[name]

//         this.setState(updatedState);
//     }

//     render() {
//         return (
//             <div>
//                 <Nav />
//                 <div className="container-2">
//                     <p className="select-title">Select Racer</p>
//                     <div className="images">
//                         <div className="trump">
//                             <img className={`image-trump${this.state.clickedImages.trump ? " highlight":""}`} src={Trump} id="trump" onClick={() => this.handleClick("trump")}
//                             />
//                         </div>
//                         <div className="warren">
//                             <img className={`image-warren${this.state.clickedImages.warren ? " highlight":""}`} src={Warren} id="warren" onClick={() => this.handleClick("warren")}/>
//                         </div>
//                         <div className="obama">
//                             <img src={Obama} id="obama"/>
//                             <i className="fas fa-lock lock"></i>
//                         </div>   
//                     </div>

function Racer(props) {
    const whichCharacter = () => {
        if(props.character==="elizabeth"){
            return (
            <div>
            <img src={Bluecar} id="elizabeth"/>
             <img src={Elizabeth} id="elizabeth"/>
             <img src={Ovaloffice} id="elizabeth"/>
            <Wstart />
            </div>)
        }else if( props.character==="trump")        {
            return (
            <div>
            <img src={Redcar} id="trump"/>
            <img src={Trump} id="trump"/>
            <img src={Ovaloffice} id="trump"/>
           <Tstart />
            </div> )
        }
    }
    return (
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Click to change racer</p>
                <div className="images" onClick={() => props.changeCharacter("trump")}>
                    {whichCharacter()}
                </div>
            </div>
        </div>
    );
 }
 export default Racer;
 
 
 