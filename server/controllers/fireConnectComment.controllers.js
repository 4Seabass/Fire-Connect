const Comment = require("../models/fireConnectComment.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("../models/fireConnectAccount.models");


const createComment = (req, res) => {
    const newCommentObject = new Comment( req.body );

    newCommentObject.createdBy = req.jwtpayload.id;

    newCommentObject.save()
        .then(newComment => {
            res.json(newComment)
        })
        .catch(err => res.json(err));
};

const findAllComments = (req, res) => {
    Comment.find()
    .populate("createdBy", "username email")
        .then(comments => {
            res.json(comments);
        })
        .catch(err => {
            console.log("A error has occured", err)
            res.json(comments)
        })
}

const findAllCommentsByUser = (req, res) => {
    if(req.jwtpayload.username !== req.params.username){
        Account.findOne({ username: req.params.username })
            .then((accountNotLoggedIn) => {
                Comment.find({ createdBy: accountNotLoggedIn._id })
                    .then((allCommentsFromAccount) => {
                        console.log(allCommentsFromAccount)
                        res.json(allCommentsFromAccount)
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(400).json(err);
                    })
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }
    else {
        Comment.find({ createdBy: req.jwtpayload.id })
            .then((allCommentsFromLoggedInAccount) => {
                console.log(allCommentsFromLoggedInAccount)
                res.json(allCommentsFromLoggedInAccount)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}

const findAllCommentsByDiscussion = (req, res) => {
    Comment.find({ createdFor: req.params.createdFor })
        .populate("createdBy", "username email")
        .then((allCommentsFromDiscussion) => {
            console.log("Found Comments for this Disucssion!")
            res.json(allCommentsFromDiscussion)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
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
    findAllCommentsByUser,
    findAllComments,
    findAllCommentsByDiscussion,
    findOneComment,
    updateOneComment,
    deleteComment
};