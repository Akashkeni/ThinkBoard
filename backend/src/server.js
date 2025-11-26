import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// cors
app.use(cors({
  origin:"http://localhost:5173"
}))

//middleware
app.use(express.json()); // Parses the json body : allow access to req.body

// The ratelimit middleware using redis
app.use(rateLimiter);



// custom example middle ware
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} && Req URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
