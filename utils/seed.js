const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose.connect('mongodb://localhost/socialnetworkdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    thoughts: [],
    friends: [],
  },
  // Add more user data as needed
];

const thoughtData = [
  {
    thoughtText: 'This is the first thought',
    username: 'user1',
    reactions: [],
  },
  {
    thoughtText: 'This is the second thought',
    username: 'user2',
    reactions: [],
  },
  // Add more thought data as needed
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
