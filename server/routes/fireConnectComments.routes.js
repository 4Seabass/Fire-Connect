const CommentController = require('../controllers/fireConnectComment.controllers'); 
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {
    // Comment Routes
    app.get("/api/account/comments/:username", authenticate, CommentController.findAllCommentsByUser);
    app.get("/api/all/comments", CommentController.findAllComments);
    app.get("/api/discussion/comments/:createdFor", authenticate, CommentController.findAllCommentsByDiscussion);
    app.get("/api/selected/comment/:id", authenticate, CommentController.findOneComment);
    app.post("/api/create/comment", authenticate, CommentController.createComment);
    app.put("/api/update/comment/:id", authenticate, CommentController.updateOneComment);
    app.delete("/api/delete/comment/:id", authenticate, CommentController.deleteComment);
}


