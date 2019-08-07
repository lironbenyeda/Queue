
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Stars from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import './Question.css';
import QuestionApi from '../../api/questionApi'
class Question extends React.Component {
    constructor(props){
        super(props)
        this.state={
            starFade:false
        }
    }
    render() {
        console.log(this.state.starFade)
        const question = this.props.question
        return (
            <Paper style={{ width: '80%', margin: 'auto',marginTop:'5%' }}>
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
                    </span><Stars onClick={()=>{
                        let newQuestion = question
                        newQuestion.rank = newQuestion.rank+1
                        QuestionApi.updateQuestion( question)
                        this.setState({
                            starFade:true
                        },()=>QuestionApi.updateQuestion(question).then(()=>{
                            
                        }))
                    }}
                    onAnimationEnd={()=>this.setState({starFade:false})}
                    className={this.state.starFade? 'fade':null}                    
                    />
                </div>


            </Paper>
        );
    }

}

export default Question;