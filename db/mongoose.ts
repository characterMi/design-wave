import mongoose, { Mongoose } from "mongoose";

const DB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDB = async () => {
  if (cached.conn) return cached.conn;

  if (!DB_URL) throw new Error("Missing MongoDB url !");

  cached.promise =
    cached.promise ||
    mongoose.connect(DB_URL, { dbName: "DesignWave", bufferCommands: false });

  cached.conn = await cached.promise;

  return cached.conn;
};
