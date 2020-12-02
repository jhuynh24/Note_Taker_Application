const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const router = require('express').Router();

router.use('/api', apiRoutes);
router.use(htmlRoutes);

module.exports = router;