const express = require('express')
const router = express.Router();
const {create,destroy} = require('../controllers/comment_controller');

router.post('/create',create)
router.get('/destroy/:id',destroy)

module.exports = router;