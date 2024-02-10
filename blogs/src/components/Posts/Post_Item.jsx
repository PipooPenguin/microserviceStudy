import React from "react";

const Post_Item = ({ item }) => {
  return (
    <div>
      <p>title: {item.title}</p>
      <p>content: {item.content}</p>
      <hr></hr>
    </div>
  );
};

export default Post_Item;
