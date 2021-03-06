const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const rsvpSchema = require('./Rsvp');

const eventSchema = new Schema(
    {
        host: {
            type: String, 
            trim: true,
        },
        name: {
            type: String, 
            required: 'You must name this event',
            trim: true
        },
        description: {
            type: String,
            required: 'Please provide a description of the event',
            minlength: 4,
            maxlength: 280
        },
        fee: {
            type: Number,
            required: false,
        },
        date: {
            type: Date,
            required: 'Please provide a date',
        },
        location: {
            type: String,
            required: false, 
        },
        isPrivate: {
            type: Boolean,
            default: true,
            required: true,
        },
        guests: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        confirmedRsvps: [
            {
                type: Schema.Types.ObjectId,
                ref: "Rsvp"
            }
        ]
    }, 
    {
        toJSON: {
            virtuals: true,
        } 
    }
);

eventSchema.virtual('guestCount').get(function () {
    return this.guests.length
});


const Event = model('Event', eventSchema);

module.exports = Event;