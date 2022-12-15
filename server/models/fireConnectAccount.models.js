const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AccountSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minLength: [2, "First must be a minimum of 2 characters!"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minLength: [2, "Last name must be a minimum of 2 characters!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [8, "Password must be a minimum of 8 characters!"],
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
        minLength: [4, "Username must be a minimum of 3 characters!"],
    },
    dateCreated: {
        type: Date,
    },
    }, 
    { timestamps: true }
);


AccountSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)


AccountSchema.pre("validate", function(next){

    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match!")
        console.log("Passwords dont match!")
    }

    next()
})


AccountSchema.pre("save", function(next){
    console.log("in pre save");

    bcrypt.hash(this.password, 13)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next()
        })
})




const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;