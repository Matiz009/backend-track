const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

const messageSchema = mongoose.Schema({
  name: String,
  email: String,
});

const message = mongoose.model("names", messageSchema);
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

app.post("/add", async (req, res) => {
  const data = await message.create({
    name: req.body.name,
    email: req.body.email,
  });
  data.save();
  res.send("data saved");
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.end("Done");
});
app.get("/users", (req, res) => {
  res.json(users);
});
