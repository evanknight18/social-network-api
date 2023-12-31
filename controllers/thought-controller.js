const Thought = require('../models/Thought');

const thoughtController = {
  // GET all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find().populate('reactions');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single thought by ID
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id).populate('reactions');
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST a new thought
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // PUT/update a thought by ID
  updateThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE a thought by ID
  deleteThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = thoughtController;
