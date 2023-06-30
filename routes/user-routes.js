const router = require('express').Router();
const userController = require('../controllers/user-controller');

// GET all users
router.get('/users', userController.getAllUsers);

// GET a single user by ID
router.get('/users/:id', userController.getUserById);

// POST a new user
router.post('/users', userController.createUser);

// PUT/update a user by ID
router.put('/users/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
