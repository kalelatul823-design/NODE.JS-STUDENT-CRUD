

const router = require("./Routers/studentRouter");

const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/controllersapi/studentsss", router)

module.exports = app;
