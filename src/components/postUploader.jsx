import React, { useState } from 'react';
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "../css/PostUploader.css";

 function PostUploader() {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

        const handleSubmit = e => {
            e.preventDefault();

            setInput("");
            setImageUrl("");
        }

        return ( 
            <div className="postUploader">
                <div className="postUploader__top">
                    <Avatar src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/11866310_1163006293728660_6962940529323370142_n.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_ohc=v9imRJqcb-4AX9F0hEP&_nc_ht=scontent.fbeg1-1.fna&oh=c93477c16d8acd995dfe6446192f5ccc&oe=605D2945"/>
                    <form>
                        <input 
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className="postUploader__input" placeholder="Whats on your mind, Filip?" />
                        <input 
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            className="postUploader__" placeholder="image URL (Optional)"/>
                        <button onClick={handleSubmit} type="submit">Hidden button</button>
                    </form>
                </div>
                <div className="postUploader__bottom">
                    <div className="postUploader__option">
                        <VideocamIcon style={{ color: "red"}} />
                        <h3>Live Video</h3>
                    </div>
                    <div className="postUploader__option">
                        <PhotoLibraryIcon style={{ color: "green"}} />
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="postUploader__option">
                        <InsertEmoticonIcon  style={{ color: "orange"}} />
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>
         );
}
 
export default PostUploader;