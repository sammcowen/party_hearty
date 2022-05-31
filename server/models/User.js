const { Schema, model, isNew, isModified } = require('mongoose');
const bcrypt = require('bcrypt');
const eventSchema = require('./Event');


const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // There is no, perfect regex for recognizing email addresses: included regex has 99.99% success rate. May want to consider alternatives for irl production.
            match: [
                /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                'Must match an email address'
            ]
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        events: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Event'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

// set up virtuals for Follwers and following count 
userSchema.virtual('FollowerCount').get(function() {
    return this.followers.length;
});

userSchema.virtual('FollowingCount').get(function() {
    return this.following.length;
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
      }
  
    next();
});

userSchema.pre('findOneAndUpdate', async function(next) {

    const { _id  } = this._conditions; 

    console.log(typeof(_id))
    if (typeof( _id ) === 'string') {
        const user = await User.findOne();
        const oldPassword = user.password;
        
        let newPassword = this._update.password;
            if (oldPassword === newPassword) {
                next();
            }
    
        const saltRounds = 10;
    
        this._update.password = await bcrypt.hash(this._update.password, saltRounds);
        next();
    }
    else if (typeof( _id ) === 'object') {
        next();
    }


})

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
  
const User = model('User', userSchema);

module.exports = User;