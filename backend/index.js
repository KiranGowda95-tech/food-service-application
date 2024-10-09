const express = require("express");
const mongoose = require("mongoose");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://kirankumardn74:kumar123@devconnector.fmvtn9e.mongodb.net/?retryWrites=true&w=majority&appName=DevConnector"
  )
  .then(() => {
    console.log("Connected to Atlas database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
//middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
