import React, { Component } from 'react'; 
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import PostOptions from "./postOptions";
import "../css/Post.css";

function Post({profilePicture, image, username, timestamp, title}) {
    return ( 
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePicture} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{title}</p>
                <div className="post__image">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                    
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div >
        );
}
 
export default Post;