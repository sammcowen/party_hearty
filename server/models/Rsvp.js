const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// this model returns a boolean value to confirm attending an event
const rsvpSchema = new Schema(
    {
        attending: {
            type: Boolean,
            default: false
        }
        // reference the User field id 
        // reference the event the user is attending
    }
)

const Rsvp = model('Rsvp',rsvpSchema)
module.exports = Rsvp