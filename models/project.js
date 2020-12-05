const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema ({
    name: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const notesSchema = new Schema ({
    content: {
        type: String,
        required: true
    }
});

const projectsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    goal: {
        type: String,
    },
    notes: [notesSchema],
    tasks: [tasksSchema],
    user: {type: Schema.Types.ObjectId, ref :'User'},
    userName: String,
    userAvatar: String
}, {timestamps: true
});

module.exports = mongoose.model('Movie', projectsSchema);