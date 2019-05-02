import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./config";
import { connectDB } from "./libs/connect-db";

const app = express();

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);

app.get("/api/messages", async (_, res) => {
  const db = await connectDB();
  const messages = await db.collection(config.collectionName)
    .find({})
    .sort({ createdAt: -1, part: 1 })
    .toArray();

  res.status(200).json(messages);
});

app.post("/api/message/new", async (req, res) => {
  const message = req.body.message;
  const db = await connectDB();
  await db.collection(config.collectionName).insertOne(message);

  res.status(200).json();
});

app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));
