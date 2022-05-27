// const faker = require('faker');
const userSeed = require('./userSeed.json');
const eventSeeds = require('./eventSeed.json');
const db = require('../config/connection');
const { Event, User } = require('../models');

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < eventSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(eventSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});