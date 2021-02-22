import React, { Component } from 'react'; 
import PostOptions from "./postOptions";

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1>@Title</h1>
                <h6>@Creator</h6>
                <img src="@path"/>
                <PostOptions/>
            </React.Fragment>
         );
    }
}
 
export default Post;