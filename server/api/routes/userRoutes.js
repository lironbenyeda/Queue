'use strict';
module.exports = function (app) {
    var userController = require('../controllers/userController');

    // user Routes
    app.route('/users')
       .post(userController.create_a_user);

    app.route('/users/:username/:password')
        .get(userController.check_user);
};