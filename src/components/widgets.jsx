import React, { Component } from 'react';
import Birthdays from "./birthdays";
import Chat from "./chat";

const Widgets = () => {
    return ( 
        <React.Fragment style={ {display: "flex" } }>
            {/* <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=630757761019942&autoLogAppEvents=1" nonce="BI50D4OB"></script>
            <div>
                <iframe
                src="https://www.facebook.com/facebook"
                width="340"
                height="100%"
                style={ { border: "none", overflow:"hidden" } }
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
                />
            </div> */}
            <Birthdays/>
            <Chat/>

        </React.Fragment>

     );
}
 
export default Widgets;