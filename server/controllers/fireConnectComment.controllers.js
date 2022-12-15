const Comment = require("../models/fireConnectComment.models");

const createComment = (req, res) => {
    Comment.create( req.body )
        .then(newComment => {
            res.json(newComment)
        })
        .catch(err => res.json(err));
};

const findAllComments = (req, res) => {
    Comment.find({})
        .then(comments => {
            res.json(comments);
        })
        .catch(err => {
            console.log("A error has occured", err)
            res.json(comments)
        })
}

const findOneComment = (req, res) => {
    Comment.findOne({ _id: req.params.id })
        .then(selectedComment => res.json(selectedComment))
        .catch(err => res.json(err));
}

const updateOneComment = (req, res) => {
    Comment.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(updateComment => res.json(updateComment))
        .catch(err => res.json(err))
}

const deleteComment = (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
        .then(deletedComment => res.json(deletedComment))
        .catch(err => res.json(err))
}

module.exports = {
    createComment,
    findAllComments,
    findOneComment,
    updateOneComment,
    deleteComment
};