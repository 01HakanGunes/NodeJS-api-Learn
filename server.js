import express from "express";
import reviews from "./api/reviews.route.js";

const app = express();

app.use(express.json);
app.use("/api/reviews", reviews);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
