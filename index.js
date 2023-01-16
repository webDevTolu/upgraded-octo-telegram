const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect to database
connectDB();

app.use(
  express.json({
    extended: false,
  })
);

// routes
const url = require("./routes/url");
const index = require("./routes/index");

app.use("/", index);
app.use("/api/url", url);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
