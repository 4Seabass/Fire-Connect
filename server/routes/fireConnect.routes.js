const AccountController = require('../controllers/fireConnectAccount.controllers'); 
const DiscussionController = require('../controllers/fireConnectDiscussion.controllers'); 
const CommentController = require('../controllers/fireConnectComment.controllers'); 
const Account = require('../models/fireConnectAccount.models');

module.exports = (app) => {
    // Account Routes
    app.get("/api/all/accounts", AccountController.findAllAccounts);
    app.get("/api/selected/account/:id", AccountController.findOneAccount);
    app.post("/api/create/account", AccountController.createAccount);
    app.post("/api/account/login", AccountController.loginAccount);
    app.post("/api/account/logout", AccountController.logoutAccount);
    app.put("/api/update/account/:id", AccountController.updateOneAccount);
    app.delete("/api/delete/account/:id", AccountController.deleteAccount);

    // Discussion Routes
    app.get("/api/all/discussions", DiscussionController.findAllDiscussions);
    app.get("/api/selected/discussion/:id", DiscussionController.findOneDiscussion);
    app.post("/api/create/discussion", DiscussionController.createDiscussion);
    app.put("/api/update/discussion/:id", DiscussionController.updateOneDiscussion);
    app.delete("/api/delete/discussion/:id", DiscussionController.deleteDiscussion);

    // Comment Routes
    app.get("/api/all/comments", CommentController.findAllComments);
    app.get("/api/selected/comment/:id", CommentController.findOneComment);
    app.post("/api/create/comment", CommentController.createComment);
    app.put("/api/update/comment/:id", CommentController.updateOneComment);
    app.delete("/api/delete/comment/:id", CommentController.deleteComment);
}


