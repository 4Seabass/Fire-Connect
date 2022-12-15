const Account = require("../models/fireConnectAccount.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createAccount = (req, res) => {
    
    const account = new Account( req.body );

    account.save()
        .then((newAccount) => {
            console.log(newAccount);
            console.log("Succcefully Created!")
            res.json({
                confirmMessage: "Registration completed succefully!",
                account: newAccount
            });
        })
        .catch((err) => {
            console.log("Account creation not successfull!")
            console.log(err)
            res.json(err);
        })
        
}

const loginAccount = (req, res) => {
    Account.findOne({ email: req.body.email })
        .then((accountSelected) => {
            if (accountSelected === null) {
                res.status(400).json("Invalid login credentials")
            }
            else {
                bcrypt.compare( req.body.password, accountSelected.password )
                    .then((isPasswordValid) => {
                        if(isPasswordValid) {

                            console.log("Password is valid");

                            res.cookie(
                                "accounttoken",
                                jwt.sign(
                                    {
                                        id: accountSelected._id,
                                        email: accountSelected.email,
                                        username: accountSelected.username,
                                        discussions: accountSelected.discussions,
                                        comments: accountSelected.comments,
                                    },
                                    process.env.JWT_SECRET
                                ),
                                {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 900000)
                                },
                            ).json({
                                message: "Succesfully logged in!",
                                accountLoggedIn: accountSelected.username,
                                accountId: accountSelected._id
                            });
                        }
                        else {
                            res.status(400).json("Invalid login creds")
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(400).json("Invalid credentials");
                    })
            }

        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Credentials are invalid!");
        })

}

const logoutAccount = (req, res) => {
    console.log("Logging out!")
    res.clearCookie("accounttoken");
    res.json({
        message: "You have logged out successfully!",
    });
}

const findAllAccounts = (req, res) => {
    Account.find({})
        .then(accounts => {
            res.json(accounts);
        })
        .catch(err => {
            console.log("A error has occured", err)
            res.json(accounts)
        })
}

const findOneAccountById = (req, res) => {
    Account.findOne({ _id: req.params.id })
        .then(selectedAccount => res.json(selectedAccount))
        .catch(err => res.json(err));
}

const findOneAccountByEmail = (req, res) => {
    Account.findOne({ email: req.params.email })
        .then(selectedAccount => res.json(selectedAccount))
        .catch(err => res.json(err));
}

const findLoggedInAccount = (req, res) => {
    Account.findOne({ _id: req.jwtpayload.id })
        .then(currentAccount => res.json(currentAccount))
        .catch(err => res.json(err));
}

const updateOneAccount = (req, res) => {
    Account.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(updateAccount => res.json(updateAccount))
        .catch(err => res.json(err))
}

const deleteAccount = (req, res) => {
    Account.deleteOne({ _id: req.params.id })
        .then(deletedAccount => res.json(deletedAccount))
        .catch(err => res.json(err))
}

module.exports = {
    createAccount,
    loginAccount,
    logoutAccount,
    findLoggedInAccount,
    findAllAccounts,
    findOneAccountById,
    findOneAccountByEmail,
    updateOneAccount,
    deleteAccount
};