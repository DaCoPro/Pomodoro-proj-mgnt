const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema ({
    title: String
})

module.exports = mongoose.model('Movie', projectsSchema);