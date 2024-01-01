import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Postcontext = createContext({});
export const PostcontextProvider = ({ children }) => {
  const [post,setPost] = useState([]);
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const url = "http://localhost:3001/list";
        const res = await axios(url);
        // const data = JSON.parse(res.data);
        // console.log("Postcontext PostcontextProvider res: ", res.data);
        setPost(res.data);
      } catch (error) {
        console.log("Postcontext PostcontextProvider error: ");
      }
    }
    fetchData();
  }, []);
  return (
    <Postcontext.Provider value={{post,setPost}}>{children}</Postcontext.Provider>
  );
};
export default Postcontext;
