const express = require('express');
const controller = require('../controller/Cfile');
const router = express.Router();
const { upload, uploadDetail } = require('../middlewares/upload-middleware'); 

router.get('/', controller.getMain);
router.post('/upload', upload.single('userfile'), controller.upload);
router.post('/upload/array', uploadDetail.array('userfiles'), controller.uploadArray);
router.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),controller.uploadFields);
router.post('/dynamicFile', uploadDetail.single('dynamicUserfile'), controller.dynamicFile);
router.post('/upload/hello', uploadDetail.single('prac31'), controller.uploadPractice);

module.exports = router;
