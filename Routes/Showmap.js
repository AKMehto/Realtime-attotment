const express=require('express');
const router = express.Router();
const showmapController=require('../controllers/showmapController');

router.get('/',showmapController);

module.exports = router;






