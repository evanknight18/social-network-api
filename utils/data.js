const faker = require('faker');

const generateUserData = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const user = {
      username,
      email,
      thoughts: [],
      friends: [],
    };
    users.push(user);
  }
  return users;
};

const generateThoughtData = (users, count) => {
  const thoughts = [];
  for (let i = 0; i < count; i++) {
    const thoughtText = faker.lorem.sentence();
    const username = faker.random.arrayElement(users).username;
    const thought = {
      thoughtText,
      username,
      reactions: [],
    };
    thoughts.push(thought);
  }
  return thoughts;
};

module.exports = { generateUserData, generateThoughtData };
