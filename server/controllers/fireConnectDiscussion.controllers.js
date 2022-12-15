const Discussion = require("../models/fireConnectDiscussion.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("../models/fireConnectAccount.models");


const createDiscussion = (req, res) => {
    const newDiscussionObject = new Discussion( req.body );

    newDiscussionObject.createdBy = req.jwtpayload.id;
    
    newDiscussionObject.save()
        .then(newDiscussion => {
            res.json(newDiscussion)
        })
        .catch(err => res.json(err));
}

const findAllDiscussions = (req, res) => {
    Discussion.find()
        .populate("createdBy", "username email")
        .then(discussions => {
            res.json(discussions);
        })
        .catch(err => {
            console.log("A error has occured", err)
            res.json(discussions)
        })
}

const findAllDiscussionsByUser = (req, res) => {
    if(req.jwtpayload.username !== req.params.username){
        Account.findOne({ username: req.params.username })
            .then((accountNotLoggedIn) => {
                Discussion.find({ createdBy: accountNotLoggedIn._id })
                    .populate("createdBy", "username")
                    .then((allDiscussionsFromAccount) => {
                        console.log(allDiscussionsFromAccount)
                        res.json(allDiscussionsFromAccount)
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
        Discussion.find({ createdBy: req.jwtpayload.id })
            .populate("createdBy", "username")
            .then((allDiscussionsFromLoggedInAccount) => {
                console.log(allDiscussionsFromLoggedInAccount)
                res.json(allDiscussionsFromLoggedInAccount)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}

const findOneDiscussionById = (req, res) => {
    Discussion.findOne({ _id: req.params.id })
        .then(selectedDiscussion => res.json(selectedDiscussion))
        .catch(err => res.json(err));
}

const updateOneDiscussion = (req, res) => {
    Discussion.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(updateDiscussion => res.json(updateDiscussion))
        .catch(err => res.json(err))
}

const deleteDiscussion = (req, res) => {
    Discussion.deleteOne({ _id: req.params.id })
        .then(deletedDiscussion => res.json(deletedDiscussion))
        .catch(err => res.json(err))
}

module.exports = {
    createDiscussion,
    findAllDiscussions,
    findAllDiscussionsByUser,
    findOneDiscussionById,
    updateOneDiscussion,
    deleteDiscussion
};