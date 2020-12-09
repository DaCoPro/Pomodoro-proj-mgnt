const Project = require('../models/project');

module.exports = {
    create,
    delete: deleteNote,
};

function create (req, res) {
    Project.findById(req.params.id, function(err, project) {
        req.body.user = req.user._id;
        req.body.user = req.user.name;
        req.body.userAvatar = req.user.avatar;
        project.notes.push(req.body);
        project.save(function(err) {
            res.redirect(`/projects/${project._id}`);
        });
    });
}

function deleteNote(req, res, next) {  
    Project.findOne({'notes._id':req.params.id})
        .then(function(project) {
            const note = project.notes.id(req.params.id);
            note.remove();
            project.save().then(function() {
                res.redirect(`/projects/${project._id}`);
            }).catch(function(err) {
                return next(err);
            });
        });
}