import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import news from "../../News/News";


const MyPosts = (props) => {


  let newPostElement=React.createRef();
  let postelem = props.posts.map(p=><Post message={p.message} l={p.l}/>)
  let addPost = ()=>{
    let text =newPostElement.current.value;
    props.addPost(text);
  }

    return (
    <div>
      Myposts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>
        {postelem}
      </div>
  </div> )
};

export default MyPosts;