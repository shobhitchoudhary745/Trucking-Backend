const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error");
const dotenv = require("dotenv");
const app = express();

const path = "./config/config.env";

dotenv.config({ path });

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.get("/", (req, res, next) => res.json({ message: "Server is running" }));

const { adminRoute, userRoute, enquiryRoute, locationRoute, truckRoute, tripRoute, millRoute, contentRoute, notificationRoute } = require("./src");

app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.use("/api/enquiry", enquiryRoute);
app.use("/api/location", locationRoute);
app.use("/api/truck", truckRoute);
app.use("/api/trip", tripRoute);
app.use("/api/mill", millRoute);
app.use("/api/content", contentRoute);
app.use("/api/notification", notificationRoute);

app.all("*", async (req, res) => {
  res
    .status(404)
    .json({
      error: {
        message: "Not Found. Kindly Check the API path as well as request type",
      },
    });
});

app.use(errorMiddleware);

module.exports = app;

