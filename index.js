const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(8080, () => console.log("Server listen at 8080"));
app.all("*", (_, res) => res.json({ message: "Hello World!" }));
