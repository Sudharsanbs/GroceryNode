
require("dotenv").config();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
     process.env.UPLOAD_PATH
    );
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
const uploadSingleFile = upload.single("file");
module.exports = {
  uploadSingleFile,
};