
import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Stars from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import TextField from '@material-ui/core/TextField';
import './Question.css';
import QuestionApi from '../../api/questionApi'

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
            <div>
                <Paper style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                    <Typography variant="h4">
                        {question.text}
                    </Typography>
                    <Typography variant="body1" style={{
                        position: 'relative',
                        right: '3%',
                    }}>
                        נשאלה בתאריך :{moment(question.created_date).format('DD/MM/YYYY')}
                    </Typography>
                    <div style={{
                        position: 'relative',
                        right: '-10px',
                        float: 'left',
                        bottom: '30px',
                    }}>
                        <span style={{
                            position: 'relative',
                            top: '2px'
                        }}>
                            {question.rank}
                        </span><Stars onClick={() => {
                            if (this.state.starFade !== 'fade') {

                                let newQuestion = question
                                newQuestion.rank = newQuestion.rank + 1
                                this.setState({
                                    starFade: true
                                }, () => QuestionApi.updateQuestion(question).then((data) => {
                                    this.props.updateQuestion(this.props.questions.filter(question => {
                                        if (question._id === data._id)
                                            return data;
                                        return question;
                                    }))
                                }))
                            }
                        }}
                            onAnimationEnd={() => this.setState({ starFade: false })}
                            className={this.state.starFade ? 'fade' : null}

                        />



                    </div>
                </Paper >
                {this.props.user !== '' ?
                    <Paper style={{
                        width: '80%',
                        marginRight: '10%',
                        display: 'flex',
                        
                        paddingRight: '100px',
                    }}>
                        <Button color="primary" onClick={() => this.showHideAnswerBox()}>
                            הגב
                </Button>
                        {this.state.answerBox ?
                            <div>
                                <TextField
                                style={{width: '500px'}}
                                    id="outlined-dense-multiline"
                                    placeholder="יאללה"
                                    onChange={(event) => this.setAnswer(event.target.value)}
                                    margin="dense"
                                    variant="outlined"
                                    multiline
                                    rowsMax="4" />
                                <Button onClick={() => {
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
                                }}
                                style={{marginTop: '10px'}}
                                >שלח</Button>
                            </div> : null}
                    </Paper> : null}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    questions: state.questions,
    user: state.userName
});
const mapDispatchToProps = dispatch => ({
    updateQuestion: question => dispatch(updateQuestion(question))
});


export default connect(mapStateToProps, mapDispatchToProps)(Question);