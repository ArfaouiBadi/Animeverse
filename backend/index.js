const userRoutes = require("./routes/userRoutes");
const produitsRoutes = require("./routes/produitsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRoutes);
app.use("/api/products", produitsRoutes);
app.use("/api/orders", ordersRoutes);

// Connect to MongoDB
mongoose.connect(process.env.URL).then(() => {
  console.log("🟢 Connected To DataBase");
  // Listen for requests
  const PORT = 3002;
  app.listen(PORT, () => {
    console.log(`🟢 Server started on port ${PORT}`);
  });
});
