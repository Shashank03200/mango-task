require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const errorHandler = require("./helpers/errorHandler/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use("/smartphone", require("./routes/smartphone"));

// Error Handler
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error in connection to DB");
  });
