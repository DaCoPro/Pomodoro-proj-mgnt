const Project = require('../models/project');

module.exports = {
    show
}

function show(req, res) {
    res.render('work', {title: 'Work'})
}