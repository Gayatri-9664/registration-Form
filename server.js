const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer(); // memory storage

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle form submission
app.post("/submit", upload.single("profilePic"), (req, res) => {
  console.log("📌 Student Registration Data:");
  Object.entries(req.body).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  if (req.file) {
    console.log("📎 File uploaded:", req.file.originalname);
  }

  res.send("✅ Registration successful! Check server console for details.");
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
