const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');

router.use('/api', userRoutes);
router.use('/api', thoughtRoutes);
router.use('/api', reactionRoutes);

module.exports = router;
