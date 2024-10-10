const express = require("express");
const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const app = express();
const PORT = 5000;

connectDB();
app.use(cors());
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
