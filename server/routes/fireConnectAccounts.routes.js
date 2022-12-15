const AccountController = require('../controllers/fireConnectAccount.controllers'); 
const {authenticate} = require("../config/jwt.config")


module.exports = (app) => {
    // Account Routes
    app.get("/api/all/accounts", AccountController.findAllAccounts);
    app.get("/api/selected/account/:id", authenticate, AccountController.findOneAccountById);
    app.get("/api/selected/account/email/:email", AccountController.findOneAccountByEmail);
    app.get("/api/get/account", authenticate, AccountController.findLoggedInAccount);
    app.post("/api/create/account", AccountController.createAccount);
    app.post("/api/account/login", AccountController.loginAccount);
    app.post("/api/account/logout", AccountController.logoutAccount);
    app.put("/api/update/account/:id", AccountController.updateOneAccount);
    app.delete("/api/delete/account/:id", AccountController.deleteAccount);
}


