const express = require("express");
const path = require("path");

const app = express();

const messageRouter = require("./routes/messages");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", messageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port localhost:${PORT}!`));
