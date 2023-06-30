const { User } = require('../models');

const friendsController = {
  // POST/add a friend to a user's friend list
  addFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;

      // Update the user's friend list
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!updatedUser) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // DELETE/remove a friend from a user's friend list
  removeFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;

      // Update the user's friend list
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!updatedUser) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = friendsController;
