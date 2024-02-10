import React from "react";
import { useContext } from "react";
import Postcontext from "../../hook/postcontext";
import Post_Item from "./Post_Item";

const Post_List = () => {
  const { post } = useContext(Postcontext);
  console.log("Pist_List post: ", post);
  return (
    <>
      {post.length !== 0 ? (
        <>
          {post.map((item) => (
            <Post_Item key={item.id} item={item}/>
          ))}
        </>
      ) : (
        "posts empty"
      )}
    </>
  );
};

export default Post_List;
