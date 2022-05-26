const { Schema, model } = require('mongoose');
const userSchema = require('./User');

const eventSchema = new Schema(
    {
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
        guests: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
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