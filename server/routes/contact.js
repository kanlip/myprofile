const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.post('/contactme',contactController.contact_me);
module.exports = router;
