const { Schema, model } = require('mongoose');

const DeveloperSchema = new Schema({
    name: {
        type: String,
        required: true,        
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, // Formato do id do mongo
        ref: 'Developer',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId, // Formato do id do mongo
        ref: 'Developer',
    }],
}, {
    timestamps: true,
});

module.exports = model('Developer', DeveloperSchema);