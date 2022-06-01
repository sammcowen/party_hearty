const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const eventSchema = require('./Event');

// this model returns a boolean value to confirm attending an event
const rsvpSchema = new Schema(
    {
        attending: {
            type: Boolean,
            default: false,
            required: true
        },
        invitedUserId: {
            type: String,
            required: true
        },
        eventId: {
            type: String,
            required: true,
        },
        username: {
            type: String,
        }
    }
)

const Rsvp = model('Rsvp', rsvpSchema)
module.exports = Rsvp;