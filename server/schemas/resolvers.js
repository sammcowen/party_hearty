const { AuthenticationError } = require('apollo-server-express');
const { User, Event, Rsvp } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // query me to verify user is logged in 
        me: async (parent, args, context) => {
            // if context.user exists, return the userData
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate('events').populate('followers').populate('following').populate('invitesRecieved')
                
                    return userData;
            }
            // if no context.user exists, we know that the user is not authenticated
            throw new AuthenticationError('Not logged in');
        },
        // get all users 
        users: async () => {
            return User.find().populate('events').populate('followers').populate('following')
        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('events').populate('followers').populate('following')
        },
        // get all events 
        events: async () => {
            return Event.find().populate('guests').populate('guestsRsvp');
        },
        // get event by id
        event: async (parent, { _id }) => {
            try {
               const foundEvent = await Event.findOne({ _id }).populate('guests').populate('guestsRsvp');

               return foundEvent;
            } catch (e) {
                console.log(e);
            }
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user){
                try {
                    const user = await User.findOneAndUpdate(
                            { _id: context.user._id },
                            { ...args },
                            { new: true }
                    ).populate('events').populate('followers').populate('following');
                    return user;

                } catch (e) {
                    console.log (e)
                }
            }
            throw new AuthenticationError('You need to be logged in to updated User info')
        },
        addEvent: async (parent, args, context) => {
            if (context.user) {
                // create new event object
                const event = await Event.create({ ...args, username: context.user.username });
                // push event obj to User collection by id
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { events: event._id }},
                    { new: true }
                )
                return event;
            }

            throw new AuthenticationError('You must be logged in to post an event');
        },
        addFollower: async (parent, { followerId }, context) => {
            if (context.user) {
                // update logged in users following array:
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { following: followerId } },
                    { new: true }
                ).populate('following').populate('followers');
                

                // push logged in user id to 
                await User.findByIdAndUpdate(
                    { _id: followerId },
                    { $addToSet: { followers: context.user._id } },
                    { new: true }
                )

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in to add a follower!');
        },
        addGuest: async (parent, { eventId, guestId }, context) => {
            if (context.user) {
                const updatedEvent = await Event.findOneAndUpdate(
                    { _id: eventId },
                    { $addToSet: { guests: guestId } },
                    { new: true }
                ).populate('guests').populate('guestsRsvp');

                return updatedEvent;
            }

            throw new AuthenticationError('You need to be logged in to add a guest')
        },
        // updates the event details
        updateEvent: async (parent, args, context) => {
            if(context.user){
                // finds the event through event id and updates arguments
                const event = await Event.findByIdAndUpdate({_id: args.eventId}, {...args}, {new:true});
                return event;
           }
           throw new AuthenticationError('You need to be logged in to update an event');
        },
        // removes guest from event
        removeGuest: async (parent, { eventId, guestId }, context) => {
            if (context.user) {
                return await Event.findOneAndUpdate(
                    { _id: eventId },
                    { $pull: { guests: guestId } },
                    { new: true }
                ).populate('guests').populate('guestsRsvp');
            }
            throw new AuthenticationError('You need to be logged in to remove a guest');
        },
        // removes event from user
        removeEvent: async (parent, { eventId }, context) => {
            if (context.user) {
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { events: eventId } },
                    { new: true }
                )
                return Event.findOneAndRemove(
                        {_id: eventId},
                        { new: true}
                    )
            }
            throw new AuthenticationError('You need to be logged in to remove an Event');
        },
        // removes follower from user 
        removeFollowers: async (parent, { followersId }, context) => {
            if (context.user) {
                try {  
                   const updateFollow = await User.findByIdAndUpdate(
                        { _id: followersId},
                        { $pull: { followers: context.user._id } },
                        { new: true }
                    )
                    if (updateFollow) {
                        try {
                            const updatedUser = await User.findByIdAndUpdate(
                                { _id: context.user._id },
                                { $pull: { following: followersId } },
                                { new: true }
                            ).populate('followers').populate('following')

                            return updatedUser;
                        } catch (e) {
                            console.log('error removing from your folloing array:  ',e)
                        }
                    }
                } catch (e) {
                    console.log('error removing from followersId`s followers array:  ', e)
                }
            }
            throw new AuthenticationError('You need to be logged in to remove a Follower');
        },
        sendRsvp: async (parent, args, context) => {
          if(context.user) {
              try {
                const RSVP = await Rsvp.create(args);
                
                const { invitedUserId } = args;
                console.log(invitedUserId);
                if(RSVP) {
                    try {
                        const invitedUser = await User.findByIdAndUpdate(
                            invitedUserId,
                            {invitesRecieved: RSVP },
                            {new: true}
                        ).populate('followers').populate('following').populate('invitesRecieved')
                        
                        return invitedUser;
                    } catch (e) {
                        
                        console.error(e);
                        return;
                    }
                }
              } catch (e) {
                  console.error(e)
                  return;
              }
          }
            throw new AuthenticationError('You need to be logged in to send an RSVP');
        },
        confirmRsvp: async (parent, args, context) => {
            if(context.user){
                try {
                    const reservedRSVP = await Rsvp.findOneAndUpdate(
                        {invitedUserId: context.user._id, eventId: args.eventId},
                        {attending: args.attending});
                    return reservedRSVP;
                } catch (e) {
                    console.error(e)
                }
            }
            throw new AuthenticationError('You need to be logged in to confirm an RSVP')
        }
    },
    User: {
        invitesRecieved: async (root) => {
            try {
                return Rsvp.find({invitedUserId: root._id})
            } catch (e) {
                throw new Error(e);
            }
        }
    },
    Event: {
        confirmedRsvps: async (root) => {
            try {
                const RSVPs =await Rsvp.find({eventId: root._id})
                const confirmed = RSVPs.filter((RSVP) => { 
                    return RSVP.attending === true;
                });

                return confirmed;
            } catch (e) {
                throw new Error(e);
            }
        }
    }
}


module.exports = resolvers;