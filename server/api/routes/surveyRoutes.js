'use strict';
module.exports = function (app) {
    var surveyController = require('../controllers/surveyController');

    // survey Routes
    app.route('/surveys')
        .get(surveyController.list_all_surveys)
        .post(surveyController.create_a_survey);

    app.route('/surveys/:surveyId')
        .get(surveyController.read_a_survey)
        .put(surveyController.update_a_survey)
};