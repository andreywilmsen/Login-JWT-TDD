let express = require('express');
let router = express.Router();
let userController = require('../controler/userController');
const User = require('../model/User');

router.get("/", (req, res) => {
    res.json({})
})

router.post("/register", userController.register);

router.post("/auth", userController.auth);

router.delete("/user/:email", userController.deleteUser);

module.exports = router;