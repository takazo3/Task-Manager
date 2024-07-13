import mongoose from "mongoose";
import dotenv from "dotenv";

// .envファイルの内容を読み込む
dotenv.config();

// console.log(process.env.DB_URI); // 環境変数の確認
// console.log(mongoose); // mongooseの確認

export const connectDb = async () => {
  try {

    await mongoose.connect(process.env.DB_URI || "");

  } catch (error) {
    console.error("Database connection error", error);
    throw new Error(`Database connection failed: ${error}`);
  }
};

// // mongoose.connectionの状態を確認
// console.log("connectDb呼び出し後のMongoose接続状態:", mongoose.connection);