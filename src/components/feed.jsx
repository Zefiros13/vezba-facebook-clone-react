import React, { useState, useEffect } from 'react';
import PostUploader from "./postUploader";
import Post from "./post";
import db from "../firebase";

import "../css/Feed.css";

function Feed() { 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => 
            setPosts(snapshot.docs.map(doc => ( { id: doc.id, data: doc.data() } )))
        );
    }, []);
        return ( 
            <div className="feed">
                <PostUploader/>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        profilePicture={post.data.profilePicture}
                        title={post.data.title}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))}


            </div>
         );
    }
 
export default Feed;