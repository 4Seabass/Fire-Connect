const mongoose = require("mongoose");


const DiscussionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [2, "Title must be a minimum of 2 characters!"],
    },
    body: {
        type: String,
        required: [true, "Body is required!"],
        minLength: [2, "Body must be a minimum of 2 characters!"],
    },
    dateCreated: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Account',
    },
    }, 
    { timestamps: true }
);


const Discussion = mongoose.model("Discussion", DiscussionSchema);

module.exports = Discussion;