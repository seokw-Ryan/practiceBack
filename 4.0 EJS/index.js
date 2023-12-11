import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs", { dayType: "weekday", advice: "Take it easy!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
