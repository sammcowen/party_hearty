const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const eventSchema = require('./Event');

// this model returns a boolean value to confirm attending an event
const rsvpSchema = new Schema(
    {
        attending: {
            type: Boolean,
            default: false,
            require: true
        },
        invitedUserId: [ 
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
         ],
        eventId: {
            type: String,
            required: true
        }
    }
)

const Rsvp = model('Rsvp', rsvpSchema)
module.exports = Rsvp;