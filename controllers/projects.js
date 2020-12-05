const Project = require('../models/project');

module.exports = {
    index,
    createProject,
}

function index(req, res) {
    console.log(req.user._id)
    Project.find({}, function(err, projects) {
        res.render('projects/index', {title: 'All Projects', projects});
    });
}

function createProject(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const project = new Project(req.body);
    project.save(function(err) {
      if (err) return res.redirect('/projects');
      res.redirect('/projects');
    });

}