const express = require('express');
const router = express.Router();
const { addFile , downloadFile } = require('../controller/fileController');
const upload = require('../utils/upload');
// const {upload} = require('../utils/upload')

//Router 1: POST request http:/localhost:8000/upload

router.post('/upload',upload.single('file'),addFile)

//Router 2: GET request http:/localhost:8000/files/fileId

router.get('/files/:fileId',downloadFile)

module.exports = router

