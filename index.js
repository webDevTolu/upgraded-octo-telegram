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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
