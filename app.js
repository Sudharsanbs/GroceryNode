const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;


const errorController = require('./framework/errorControllers/error.controller');
//Router
const authRouter = require('./api/routes/auth-router');
const profileRouter = require('./api/routes/profile-router');
const groceryShopReg = require("./api/groceryRoutes/groceryShopReg-router")
const app = express();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Middleware and routes setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// API Routes
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/groceryShopReg",groceryShopReg);



app.get("/", async function (req, res) {
  res.json("server is running");
});
app.use(errorController);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

