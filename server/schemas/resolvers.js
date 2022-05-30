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
                    .select('-__v -password')
                    .populate('followers')
                    .populate('following')
                    .populate('events')
                    ;
                return userData;
            }
            // if no context.user exists, we know that the user is not authenticated
            throw new AuthenticationError('Not logged in');
        },
        // get all users 
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('followers')
                .populate('following')
                .populate('events')
                ;
        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('followers')
                .populate('following')
                .populate('events')
                ;
        },
        // get all events 
        events: async () => {
            return Event.find()
                .select('-__v')
                .populate('guests')
                ;
        },
        // get event by name
        event: async (parent, { name }) => {
            return Event.findOne({ name })
                .select('-__v')
                .populate('guests')
                ;
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
        addEvent: async (parent, args, context) => {
            if (context.user) {
                // create new event object
                const event = await Event.create({ ...args, username: context.user.username });
                // push event obj to User collection by id
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { events: event._id } },
                    { new: true }
                )
                return event;
            }

            throw new AuthenticationError('You must be logged in to post an event');
        },
        addFollower: async (parent, { followerId }, context) => {
            if (context.user) {
                // update logged in users following array:
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { following: followerId } },
                    { new: true }
                )
                    .populate('following').populate('followers')

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
                )

                return updatedEvent;
            }

            throw new AuthenticationError('You need to be logged in to add a guest')
        },

        // updates the event details
        // TODO: get it to not display null data
        updateEvent: async (parent, {args, eventId}, context) => {
            // if (context.user) {
            //     try {
            //         // finds the event through event id and updates arguments
            //         const event = await Event.findByIdAndUpdate({ _id: eventId }, args, { new: true });

            //         if (event) {
            //             try {
            //                 // set the updated event in the events array
            //                 return await User.findByIdAndUpdate(
            //                     { _id: context.user._id },
            //                     //  this may need to be changed to { $set: { events: event._id } }
            //                     { $set: { events: event } },
            //                     { new: true }
            //                 )
            //             } catch (e) { consloe.log(e) }
            //         }
            //     } catch (e) { concole.log(e) }
            // }
            // throw new AuthenticationError('You need to be logged in to update an event');
            if(context.user){
                // finds the event through event id and updates arguments
                const event = await Event.findByIdAndUpdate(eventId, {$set: args}, {new:true});
                return console.log(event);
                // set the updated event in the events array
            //    return await User.findByIdAndUpdate(
            //         { _id: context.user._id },
            //        //  this may need to be changed to { $set: { events: event._id } }
            //         { $set: { events: event } },
            //         { new: true }
            //     )
               
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
                )
            }
            throw new AuthenticationError('You need to be logged in to remove a guest');
        },
        // removes event from user
        removeEvent: async (parent, { eventId }, context) => {
            if (context.user) {
                await User.findOneAndUpdate(
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
                   const updateFollow = await User.findOneAndUpdate(
                        { _id: followersId},
                        { $pull: { followers: context.user._id } },
                        { new: true }
                    )
                    if (updateFollow) {
                        try {
                            const updatedUser = await User.findOneAndUpdate(
                                { _id: context.user._id },
                                { $unset: { following: followersId } },
                                { new: true }
                            ) 
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
        }
    }
    
    // flip the boolean for rsvpresolver
    // attending the event by changing the boolean to true
    // NOTE to front end. search by username and push id to back end
    // confirmRsvp: async (parent, { eventId, attending }, context) => {
    //     if(context.user){
    //         return await Event.findOneAndUpdate(
    //             {_id: eventId},
    //             {$push:{guestsRsvp: context.user._id} },
    //             {attending: true},
    //             {new: true}
    //         )
    //     }
    //     throw new AuthenticationError('You need to be logged');
    // }
}


module.exports = resolvers;