import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Router from "./routes/route.js";


const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use("/", Router);

const PORT =process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on port", PORT);
  // console.log(USERNAME, PASSWORD);
});
Connection();
