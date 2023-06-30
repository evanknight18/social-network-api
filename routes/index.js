const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');
const friendsRoutes = require('./friends-routes')

router.use('/api', userRoutes);
router.use('/api', thoughtRoutes);
router.use('/api', reactionRoutes);
router.use('/api', friendsRoutes)

module.exports = router;
