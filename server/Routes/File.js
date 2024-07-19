const express = require('express');
const multer = require('multer');
const Router = express.Router();
const connection = require('./dbconnection'); // Ensure this is the correct path to your database connection
const fs = require('fs');
const path = require('path');

// Directory where files will be uploaded
const dir = 'C:/UPLOADS/';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '');
    const uniqueSuffix = `${timestamp}-${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Route to handle file upload
Router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Please upload a file.' });
  }

  const filePath = path.join(dir, req.file.filename);
  const fileDetails = {
    filename: req.file.filename,
    filepath: filePath,
    upload_time: new Date(),
  };

  const sql = 'INSERT INTO file_uploads (filename, filepath, upload_time) VALUES (?, ?, ?)';
  connection.query(sql, [fileDetails.filename, fileDetails.filepath, fileDetails.upload_time], (err, result) => {
    if (err) {
      console.error('Error inserting file details into database:', err);
      return res.status(500).send({ message: 'Database error' });
    }

    res.status(200).send({
      message: 'File uploaded successfully!',
      file: req.file,
      dbResult: result,
    });
  });
});

module.exports = Router;