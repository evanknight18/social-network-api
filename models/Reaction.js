const mongoose = require('mongoose');

const { Schema } = mongoose;

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => new Date(createdAtVal).toISOString(),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
