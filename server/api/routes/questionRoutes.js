'use strict';
module.exports = function (app) {
    var questionController = require('../controllers/questionController');

    // question Routes
    app.route('/questions')
        .get(questionController.list_all_questions)
        .post(questionController.create_a_question);

    app.route('/questions/:questionId')
        .get(questionController.read_a_question)
        .put(questionController.update_a_question)
};