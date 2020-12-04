const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    timestamps: true

})

module.exports = mongoose.model('Movie', projectsSchema);