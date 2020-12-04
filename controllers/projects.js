const Project = require('../models/project');

module.exports = {
    index,
    createProject,
}

function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {title: 'All Projects', projects});
    });
}

function createProject(req, res) {
    const project = new Project(req.body);
    project.save(function(err) {
      if (err) return res.redirect('/projects');
      res.redirect('/projects');
    });
}