const express = require("express");
const cookie = require("cookie-parser");
// const cors=require("cors");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.routes");
const { reciepeRoute } = require("./routes/recipe.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
// app.use(cors());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", userRoute);
app.use("/reciepe",reciepeRoute);

const port = process.env.PORT || 8090;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
  connection();
});
