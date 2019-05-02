import { MongoClient } from "mongodb";

import config from "../config";

let db = null;

export const connectDB = async () => {
  if (db) { return db; };

  try {
    const client = await MongoClient.connect(config.connectionString, {
      useNewUrlParser: true
    });

    db = client.db(config.dbName);
    return db;
  } 
  catch (err) {
    console.error(err);
  }
};
