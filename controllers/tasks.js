const Project = require('../models/project');

module.exports = {
    create,
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