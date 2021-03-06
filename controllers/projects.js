const Project = require('../models/project');

module.exports = {
    index,
    createProject,
    show,
    new: newProject,
    delete: deleteProject
}

function deleteProject(req, res) {
    Project.findOne({'_id': req.params.id})
        .then(function(project) {
            console.log(project.name);
            project.remove();
        })
    res.redirect(`/projects`)
}

function newProject(req, res) {
    res.render('projects/new', {title: 'Add Project'});
}

function show(req, res) {
    Project.find({}, function(err, projects) {
        Project.findById(req.params.id, function(err, project) {
            res.render('projects/show', {title: "Project Details", project, projects});
        })
    })
}

function index(req, res) {
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