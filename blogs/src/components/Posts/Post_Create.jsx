import React, { useState,useContext } from "react";
import api from "../../api/blogs";
import Postcontext from "../../hook/postcontext";

const Post_Create = () => {
  const {setPost,post} = useContext(Postcontext);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await api.post("/create", input);
      // const id = data.id;
      setInput({ title: "", content: "" });
      console.log("handleSubmit inputfield: ", [...post,data]);
      setPost([...post,data]);

    } catch (error) {
      console.log("components/Posts Post_Create.jsx error");
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
            <label htmlFor="title">title:</label>
            <input
              type="text"
              value={input.title}
              id="title"
              name="title"
              onChange={(e) => {
                setInput({...input,title:e.target.value});
              }}
            />
        </div>
        <div>
            <label htmlFor="content">content:</label>
            <input
              type="text"
              value={input.content}
              id="content"
              name="content"
              onChange={(e) => {
                setInput({...input,content:e.target.value});
              }}
            />
        </div>

        <button type="submit">enter</button>
      </form>
    </>
  );
};

export default Post_Create;
