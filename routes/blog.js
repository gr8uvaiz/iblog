const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blog_controller')
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads/'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

const upload = multer({ storage: storage });


router.get('/',blogController.blog)
router.post('/create',upload.single('file'),blogController.create)
router.get('/:id',blogController.showBlogs)
router.get('/destroy/:id',blogController.destroy)

module.exports = router;