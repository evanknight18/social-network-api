const router = require('express').Router();
const thoughtController = require('../controllers/thought-controller');

// GET all thoughts
router.get('/thoughts', thoughtController.getAllThoughts);

// GET a single thought by ID
router.get('/thoughts/:id', thoughtController.getThoughtById);

// POST a new thought
router.post('/thoughts', thoughtController.createThought);

// PUT/update a thought by ID
router.put('/thoughts/:id', thoughtController.updateThought);

// DELETE a thought by ID
router.delete('/thoughts/:id', thoughtController.deleteThought);

module.exports = router;
