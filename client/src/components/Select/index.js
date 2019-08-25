/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Nav from "../Nav";
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhryEPS8RO6egieeB2Clrcy19r5kqNB2k",
    authDomain: "presidential-races.firebaseapp.com",
    databaseURL: "https://presidential-races.firebaseio.com",
    projectId: "presidential-races",
    storageBucket: "",
    messagingSenderId: "947877301947",
    appId: "1:947877301947:web:367f839f22561d8e"
};

firebase.initializeApp(config);

console.log(firebase);

const db = firebase.database();
const dbRef = firebase.ref().child('data');
// eslint-disable-next-line react/require-render-return
class Select extends Component {
    state = {
        racerId: "",
        mapId: "",
        levelId: ""
    };

    selectedRacer() {

    }

    handleItemClick = id => {
        // eslint-disable-next-line no-undef
        API.saveRacer({
            racerId: this.state.racerId,
        })
            .then(res => this.selectedRacer())
            .catch(err => console.log(err));
    };

    render() {
    }

}    