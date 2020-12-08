const Project = require('../models/project');

module.exports = {
    show
}

function show(req, res) {
    Project.find({}, function(err, projects) {
        res.render('work', {title: 'Work', projects})
    });
}