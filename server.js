const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer"); // For file uploads
const upload = multer();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit", upload.single("resume"), (req, res) => {
  console.log("Form Data Received:");
  console.log(req.body);

  if (req.file) {
    console.log("File uploaded:", req.file.originalname);
  }

  res.send("Registration successful! Check server console for details.");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
