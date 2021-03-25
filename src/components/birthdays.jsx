import React, { Component } from 'react';
import "../css/Birthdays.css";

function Birthdays(){
    return (
        <div className="birthdays">
            <h2>Birthdays</h2>
                <div className="birthdays__content">
                    <img src="https://cdn4.iconfinder.com/data/icons/christmas-celebration/128/christmas_blue-gift-box-512.png"/>
                    <h3><b>Djuro Jaksic</b> and <b>Betmenov Robin</b> have birthdays today.</h3>
                </div>
            <hr/>
        </div>
    )
}

export default Birthdays;