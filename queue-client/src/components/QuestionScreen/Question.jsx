
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Stars from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import TextField from '@material-ui/core/TextField';
import './Question.css';
import QuestionApi from '../../api/questionApi'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { connect } from 'react-redux';
import { updateQuestion } from '../../actions/questionActions'
class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starFade: false,
            answerBox: false,
            answer: ''
        }
    }
    showHideAnswerBox = () => {
        this.setState({
            answerBox: !this.state.answerBox
        })
    }
    setAnswer = (answer) => {
        this.setState({
            answer: answer
        })
    }
    render() {

        const question = this.props.question;

        return (
            <Paper style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                <Typography variant="h4">
                    {question.text}
                </Typography>
                <Typography variant="body1" >
                    נשאלה בתאריך :{moment(question.date).format('DD/MM/YYYY')}
                </Typography>
                <div style={{
                    width: 'fit-content',
                    marginRight: 'auto',
                    position: 'relative',
                    right: '-20px',
                }}>
                    <span style={{
                        position: 'relative',
                        bottom: '5px',
                    }}>
                        {question.rank}
                    </span><Stars onClick={() => {
                        let newQuestion = question
                        newQuestion.rank = newQuestion.rank + 1
                        this.setState({
                            starFade: true
                        }, () => QuestionApi.updateQuestion(question).then(() => {
                            
                        }))
                    }}
                        onAnimationEnd={() => this.setState({ starFade: false })}
                        className={this.state.starFade ? 'fade' : null}
                    />

                </div>
                <div>
                    <button onClick={() => this.showHideAnswerBox()}>תן בתשובה</button>
                    {this.state.answerBox ?
                        <div>
                            <TextField
                                id="outlined-dense-multiline"
                                label="תשובה לשאלה"
                                placeholder="יאללה"
                                onChange={(event) => this.setAnswer(event.target.value)}
                                margin="dense"
                                variant="outlined"
                                multiline
                                rowsMax="4"/>
                            <button onClick={() => {
                                let question = this.props.question
                                question.answers.push(
                                    { text: this.state.answer, user: "oded", date: new Date() }
                                );
                                question.isAnswered = true
                                QuestionApi.updateQuestion(question).then((data) => {
                                    
                                    this.props.updateQuestion(this.props.questions.filter(question => {
                                        if (question._id === data._id)
                                            return data;
                                        return question;
                                    }))
                                    this.showHideAnswerBox()
                                })
                            }}>שלח</button>
                        </div> : null}
                </div>


            </Paper >
        );
    }

}

const mapStateToProps = state => ({
    questions: state.questions
});
const mapDispatchToProps = dispatch => ({
    updateQuestion: question => dispatch(updateQuestion(question))
});


export default connect(mapStateToProps, mapDispatchToProps)(Question);