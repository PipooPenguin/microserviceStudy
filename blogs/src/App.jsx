import { useState, useContext } from "react";
import "./App.css";
import Post_Create from "./components/Posts/Post_Create";
import Post_List from "./components/Posts/Post_List";
import { PostcontextProvider } from "./hook/postcontext";

function App() {
  return (
    <>
      <h1>Blogs Cá nhân</h1>
      <PostcontextProvider>
        <Post_Create />
        <hr />
        <Post_List />
      </PostcontextProvider>
    </>
  );
}

export default App;
