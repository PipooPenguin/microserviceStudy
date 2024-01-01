const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const moment = require("moment");
moment.locale("vi");

const port = 3001;
app.use(bodyParser.json());
const posts = {};
app.get("/list", (req, res) => {
  console.log(posts);
  res.json(posts);
});

app.post("/create", (req, res) => {
  const id = randomBytes(5).toString("hex");
  const { content, title } = req.body;
  posts[id] = {
    id,
    title,
    content,
    lastUpdate: moment().format("LLLL"),
  };
  // console.log("check array: ", Array.isArray(posts));
  res.status(201).send(posts[id]);
});

app.listen(port, () => {
  console.log("listening on port: ", port);
});
