import React, { Component } from 'react';
import PostUploader from "./postUploader";
import Post from "./post";
import "../css/Feed.css";

class Feed extends Component {
    render() { 
        return ( 
            <div className="feed">
                <PostUploader/>
                <Post 
                 title="Hej, cao!"
                 profilePicture="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/11866310_1163006293728660_6962940529323370142_n.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_ohc=v9imRJqcb-4AX9F0hEP&_nc_ht=scontent.fbeg1-1.fna&oh=c93477c16d8acd995dfe6446192f5ccc&oe=605D2945"
                 image="https://i.pinimg.com/originals/c5/58/4a/c5584ae3f6a9aa7f26b276d78af77900.jpg"
                 username="Filip Beric"
                />

                <Post 
                 title="Hej, cao!"
                 profilePicture="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/11866310_1163006293728660_6962940529323370142_n.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_ohc=v9imRJqcb-4AX9F0hEP&_nc_ht=scontent.fbeg1-1.fna&oh=c93477c16d8acd995dfe6446192f5ccc&oe=605D2945"
                 image="https://images-na.ssl-images-amazon.com/images/I/41EoST0FdcL._SX331_BO1,204,203,200_.jpg"
                 username="Filip Beric"
                />


            </div>
         );
    }
}
 
export default Feed;