import React, { useState } from "react";
import axios from "axios";

const Post_Create = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("handleSubmit inputfield: ", input);
      const res = await axios.post("http://localhost:3001/create", input);
      setInput({ title: "", content: "" });
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

        <button type="submit">click it</button>
      </form>
    </>
  );
};

export default Post_Create;
