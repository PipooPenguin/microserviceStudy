const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const moment = require("moment");
moment.locale("vi");
const axios = require("axios");

const port = 3002;
app.use(bodyParser.json());
// const posts = {};
app.get("/list", async(req, res) => {
  const posts = await axios.get("http://localhost:3001/posts/");
  console.log(posts);
  res.send(posts.data);
});

app.post("/create", async(req, res) => {
  const id = randomBytes(5).toString("hex");
  const { content, title } = req.body;
  posts = {
    id,
    title,
    content,
    lastUpdate: moment().format("LLLL"),
  };
  const result = await axios.post("http://localhost:3001/posts/",posts);
  // console.log("check array: ", Array.isArray(posts));
  console.log(result);
  res.status(201).send(posts);
});

app.listen(port, () => {
  console.log("listening on port: ", port);
});
