import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db/database.js";
import contactRouter from "./routes/contactRoute.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html")); // Corrected here
});


const port = process.env.PORT || 3000;
app.use("/", contactRouter);
connectDB();
app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
