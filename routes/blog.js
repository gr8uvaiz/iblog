const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blog_controller')
const upload = require('../middlewares/multer')


router.get('/',blogController.blog)
router.post('/create',upload.single('file'),blogController.create)
router.get('/:id',blogController.showBlogs)
router.get('/destroy/:id',blogController.destroy)

module.exports = router;