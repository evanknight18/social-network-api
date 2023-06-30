const { Schema, model } = require('mongoose');

const FriendsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  friend: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Friends = model('Friends', FriendsSchema);

module.exports = Friends;
