import React, { useState } from 'react';
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from '../stateProvider';
import "../css/PostUploader.css";

 function PostUploader() {

    const [{user}, dispatch] = useStateValue();
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
                    <Avatar src={user.photoURL}/>
                    <form>
                        <input 
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className="postUploader__input" placeholder={`Whats on your mind, ${user.displayName}?`} />
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