
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Stars from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import TextField from '@material-ui/core/TextField';
import './Question.css';
import QuestionApi from '../../api/questionApi'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starFade: false,
            answerBox: false,
            answer:''
        }
    }
    showAnswerBox = () => {
        this.setState({
            answerBox: true
        })
    }
    setAnswer=(answer)=>{
        this.setState({
            answer:answer
        })
    }
    render() {

        const question = this.props.question;
        console.log(question.answers)
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
                            this.props.updateRank();
                        }))
                    }}
                        onAnimationEnd={() => this.setState({ starFade: false })}
                        className={this.state.starFade ? 'fade' : null}
                    />

                </div>
                <div>
                    <button onClick={() => this.showAnswerBox()}>תן בתשובה</button>
                    {this.state.answerBox ?
                    <div>
                         <TextField
                        id="outlined-dense-multiline"
                        label="תשובה לשאלה"
                        placeholder="יאללה"
                        onChange={(event)=> this.setAnswer(event.target.value)}
                        margin="dense"
                        variant="outlined"
                        multiline
                        rowsMax="4"
                    />
                    <button onClick={()=>{
                        let question = this.props.question
                        question.answers.push(
                            {text:this.state.answer,user:"oded",date:new Date()}
                        ) 
                        QuestionApi.updateQuestion(question).then(() => {
                            this.props.updateRank();
                        })
                    }
                        
                        }>שלח</button>
                    </div>:null}
                </div>


            </Paper >
        );
    }

}

export default Question;