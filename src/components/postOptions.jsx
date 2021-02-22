import React, { Component } from 'react';
import Like from "./like";
import Dislike from "./dislike";
import Comments from "./comments";

class PostOptions extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Like/>
                <Dislike/>
                <Comments/>
            </React.Fragment>
         );
    }
}
 
export default PostOptions;