const router = require('express').Router();
const workController = require('../controllers/workController');

router.get('/:workType',workController.work_list);
router.post('/add',workController.work_add);
module.exports = router;
