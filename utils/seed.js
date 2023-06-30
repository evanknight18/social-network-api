const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 3000, // Optional, to reduce connection timeout
});

const userData = [
  {
    username: 'evanknight18',
    email: 'evanknight18@gmail.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'mariahester9',
    email: 'mariahester9@gmail.com',
    thoughts: [],
    friends: [],
  },
];

const thoughtData = [
  {
    thoughtText: 'This is the first thought',
    username: 'evanknight18',
    reactions: [],
  },
  {
    thoughtText: 'This is the second thought',
    username: 'umariahester9',
    reactions: [],
  },
];

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(userData);

    for (let i = 0; i < thoughtData.length; i++) {
      thoughtData[i].userId = createdUsers[i]._id;
      await Thought.create(thoughtData[i]);
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
