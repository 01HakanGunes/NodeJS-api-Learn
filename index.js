import pg from "pg";
// import reviewsDAO from "./dao/reviewsDAO.js";
import express from "express";
import reviews from "./api/reviews.route.js";

// Postgresql connection
const pool = new pg.Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "12345678",
  port: "5432",
});

const app = express();

app.use(express.json);
app.use("/api/reviews", reviews);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
