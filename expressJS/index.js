const express = require("express");
const app = express();
const path = require("path");
app.listen(4000, () => {
  console.log("working");
});
app.use(express.static(path.join(path.resolve(), "public")));
//setting up view engine
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "Mati" });
});
