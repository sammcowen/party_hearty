const faker = require('faker');
const db = require('../config/connection');
const { Event, User } = require('../models');

db.once('open', async () => {
  await Event.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = 'test12345'

    userData.push({ firstName, lastName, username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create event
  let createdEvent = [];
  for (let i = 0; i < 100; i += 1) {
    const name = faker.lorem.slug();
    const description = faker.lorem.words(Math.round(Math.random() * 20) + 10);
    const fee = 100;
    const date = faker.date.future();
    const location = faker.address.streetAddress();
    const isPrivate = false;

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    // const createdEvent = );

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { event: createdEvent._id } }
    );

    createdEvent.push(await Event.create({ name, description, fee, date, location, isPrivate }));
  }


  console.log('all done!');
  process.exit(0);
});
