const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const vehicleRoutes = require("./routes/vehicleRoutes");
const customerRoutes = require("./routes/customerRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const mechanicRoutes = require("./routes/mechanicRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const billingRoutes = require("./routes/billingRoutes");
const serviceHistoryRoutes = require("./routes/serviceHistoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "AutoCare Backend is Running",
  });
});

// APIs
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/mechanics", mechanicRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/service-history", serviceHistoryRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});