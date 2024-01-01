import React from "react";
import { useContext } from "react";
import Postcontext from "../../hook/postcontext";

const Post_List = () => {
  const { post } = useContext(Postcontext);
  console.log("Pist_List greet: ", Object.values(post));
  return (
    <>
      {Object.values(post).length !== 0 ? (
        <>
          {Object.values(post).map((item) => (
              < div key = {item.id}>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
          ))}
        </>
      ) : (
        "posts empty"
      )}
    </>
  );
};

export default Post_List;
