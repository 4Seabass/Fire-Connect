const DiscussionController = require('../controllers/fireConnectDiscussion.controllers'); 
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {
    // Discussion Routes
    app.get("/api/all/discussions", DiscussionController.findAllDiscussions);
    app.get("/api/account/discussions/:username", authenticate, DiscussionController.findAllDiscussionsByUser);
    app.get("/api/selected/discussion/:id", DiscussionController.findOneDiscussionById);
    app.post("/api/create/discussion", authenticate, DiscussionController.createDiscussion);
    app.put("/api/update/discussion/:id", authenticate, DiscussionController.updateOneDiscussion);
    app.delete("/api/delete/discussion/:id", authenticate, DiscussionController.deleteDiscussion);
}


