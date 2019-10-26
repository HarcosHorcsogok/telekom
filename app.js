import express from "express";
import http from "http";
import bodyParser from "body-parser";
import userRouter from "./backend/server";

const app = express();

app.use(express.static(__dirname + "/src"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/asd", userRouter);

app.listen(3000, () =>
  console.log(`Server is listening on port ${3000}`)
);
