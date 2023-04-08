require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const { connectToDB } = require("./config/db");

<<<<<<< HEAD
// Routes
const authRoutes = require('./routes/auth')
const courseRoutes = require('./routes/courseRoutes')
const classroomRoutes = require('./routes/classroomRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const locationRoutes = require('./routes/locationRoutes')
const lectureRoutes = require('./routes/lectureRoutes')
const enrollCourseRoutes = require('./routes/enrollCourseRoutes')
const userRoute = require("./routes/userRoute")
=======
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courseRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const studentRoutes = require("./routes/studentRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const locationRoutes = require("./routes/locationRoutes");
const lectureRoutes = require("./routes/lectureRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const enrollCourseRoutes = require("./routes/enrollCourseRoutes");
const userRoute = require("./routes/userRoute");

>>>>>>> efed287dd09c4fcb8f54dd6f85a36eff2e9748e2
//Connect Mongo
connectToDB();

const app = express();

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "Welcome to the API" }));

// Define Routes
<<<<<<< HEAD
app.use('/api/courses', courseRoutes)
app.use('/api/classrooms', classroomRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoute)
app.use('/api/upload', uploadRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/lectures', lectureRoutes)
app.use('/api/enrollCourse', enrollCourseRoutes)
const dirname = path.resolve()
app.use('/uploads', express.static(path.join(dirname, '/uploads')))
=======
app.use("/api/courses", courseRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoute);
app.use("/api/upload", uploadRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/enrollCourse", enrollCourseRoutes);
const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));
>>>>>>> efed287dd09c4fcb8f54dd6f85a36eff2e9748e2

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Back end is running on port: ${PORT}`);
});
