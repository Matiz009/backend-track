const express = require("express");
const app = express();
const path = require("path");
let users = [];
app.listen(4000, () => {
  console.log("working");
});
app.use(express.static(path.join(path.resolve(), "public")));
//accessing the middleware
app.use(express.urlencoded({ extended: true }));

//setting up view engine
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "Mati" });
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.end("Done");
});
app.get("/users", (req, res) => {
  res.json(users);
});
