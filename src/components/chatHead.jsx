import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "../css/ChatHead.css";

function ChatHead( {title, src}){
    return (
        <div className="chatHead">
            <Avatar src={src}/>
            <div className="chatHead__status"></div>
            <h4> {title} </h4>
        </div>
    )
}

export default ChatHead;