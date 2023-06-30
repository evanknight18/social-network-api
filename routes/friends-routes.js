const router = require('express').Router();
const friendsController = require('../controllers/friends-controller');

// POST/add a friend to a user's friend list
router.post('/users/:userId/friends/:friendId', friendsController.addFriend);

// DELETE/remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', friendsController.removeFriend);

module.exports = router;
