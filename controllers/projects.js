const Project = require('../models/project');

module.exports = {
    index,
}

function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {title: 'All Projects', projects});
    });
}