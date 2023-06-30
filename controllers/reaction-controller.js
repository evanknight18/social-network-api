const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');

const reactionController = {
  // POST a reaction to a thought
  addReaction: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      const reaction = await Reaction.create(req.body);
      thought.reactions.push(reaction._id);
      await thought.save();
      res.json(reaction);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE a reaction from a thought
  removeReaction: async (req, res) => {
    try {
      const { thoughtId, reactionId } = req.params;
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      thought.reactions.pull(reactionId);
      await Reaction.findByIdAndDelete(reactionId);
      await thought.save();
      res.json({ message: 'Reaction deleted successfully' });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = reactionController;
