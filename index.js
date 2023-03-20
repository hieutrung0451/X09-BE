require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const { connectToDB } = require("./config/db");

// Routes
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courseRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const locationRoutes = require("./routes/locationRoutes");
const lectureRoutes = require("./routes/lectureRoutes");

//Connect Mongo
connectToDB();

const app = express();

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "Welcome to the API" }));

// Define Routes
app.use("/api/courses", courseRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/lectures", lectureRoutes);

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Back end is running on port: ${PORT}`);
});
