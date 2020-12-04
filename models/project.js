const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema ({
    name: {
        type: String
    }
})

const projectsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    tasks: [tasksSchema],
}, {timestamps: true
});

module.exports = mongoose.model('Movie', projectsSchema);