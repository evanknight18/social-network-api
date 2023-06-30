const router = require('express').Router();
const reactionController = require('../controllers/reaction-controller');

// POST a reaction to a thought
router.post('/thoughts/:thoughtId/reactions', reactionController.addReaction);

// DELETE a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', reactionController.removeReaction);

module.exports = router;
