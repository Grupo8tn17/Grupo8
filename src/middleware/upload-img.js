const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
 
const upload = multer({ storage: storage });

module.exports = upload;

//router.post('../public/images/products', upload.any(),  adminController.addProducts); 