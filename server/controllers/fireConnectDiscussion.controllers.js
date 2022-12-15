const Discussion = require("../models/fireConnectDiscussion.models");

const createDiscussion = (req, res) => {
    Discussion.create( req.body )
        .then(newDiscussion => {
            res.json(newDiscussion)
        })
        .catch(err => res.json(err));
};

const findAllDiscussions = (req, res) => {
    Discussion.find({})
        .then(discussions => {
            res.json(discussions);
        })
        .catch(err => {
            console.log("A error has occured", err)
            res.json(discussions)
        })
}

const findOneDiscussion = (req, res) => {
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
    findOneDiscussion,
    updateOneDiscussion,
    deleteDiscussion
};