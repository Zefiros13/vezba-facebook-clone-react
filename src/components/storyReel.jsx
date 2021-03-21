import React, { Component } from 'react';
import Story from "./story";
import "../css/StoryReel.css";

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story title="Milos Milovanovic" />
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </div>
    )
}

export default StoryReel;