import React, { Component } from 'react';
import PostUploader from "./postUploader";
import "../css/Feed.css";

class Feed extends Component {
    render() { 
        return ( 
            <div className="feed">
                <PostUploader/>
            </div>
         );
    }
}
 
export default Feed;