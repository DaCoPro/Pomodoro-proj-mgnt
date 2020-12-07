const Project = require('../models/project');

module.exports = {
    create,
    update
};

function create (req, res) {
    Project.findById(req.params.id, function(err, project) {
        req.body.user = req.user._id;
        req.body.user = req.user.name;
        req.body.userAvatar = req.user.avatar;
        project.tasks.push(req.body);
        project.save(function(err) {
            res.redirect(`/projects/${project._id}`);
        });
    });
}

function update(req, res) {
    Project.findOne({'tasks._id': req.params.id}, function(err, project) {
        let task = project.tasks.id(req.params.id);
        task.completed = true;
        project.save(function(err) {
            console.log(task.name);
            console.log(project.tasks);
            res.redirect(`/projects/${project._id}`)
        })
    })
};