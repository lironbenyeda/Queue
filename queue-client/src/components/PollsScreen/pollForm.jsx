import React from 'react';
import Plus from '@material-ui/icons/AddCircle'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PollApi from '../../api/pollsApi'


class PollForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            answers: [{
                text:''
            }]
        }
    }
    sendPoll = () => {
        const answersTosend = this.state.answers.map((answer)=>{

            return{
                text:answer.text,
                rank:0
            } 
        })
        const poll = {
            text:this.state.question,
            answers:answersTosend

        }
       PollApi.postPoll(poll).then(()=>{

           this.props.pollSent();
        }
       )
    }
    addNewAnswer=()=>{
        
            let everyAnswerIsFull = true;
            this.state.answers.forEach(answer=>{
                if(answer.text===null|| answer.text.trim()=== "")
                    everyAnswerIsFull=false;
                
            })
            if(everyAnswerIsFull)
            this.setState({
                answers:[...this.state.answers,{text:''}]
            })
        
    }

    render() {
        return (
            <Paper >
                {/* <Typography variant="h5" component="h3">
                   שאל שאלה
        </Typography> */}
                <TextField
                    id="filled-full-width"
                    label="שאלת הסקר"
                    style={{ width: '80%' }}
                    placeholder=""
                    onChange={(event) => this.setState({ question: event.target.value })}
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {this.state.answers.map((answer, index) => {
                    const indexForUser = index +1
                    const label = "תשובה מספר " + indexForUser 
                    return (
                        <TextField
                        key={index}
                            id="filled-full-width"
                            label={label}
                            style={{ width: '50%' }}
                            placeholder=""
                            onChange={(event) => {
                                const newAnswers = this.state.answers
                                newAnswers[index].text = event.target.value
                                this.setState({ answers: newAnswers })
                            }}
                            margin="normal"
                            variant="filled"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )
                })}


                <Plus onClick={()=>this.addNewAnswer()}/>
                <Button variant="contained" color="primary" onClick={() => this.sendPoll()} style={{
                    marginRight: '5%',
                    position: 'relative',
                    top: '25px',
                }}>
                    שלח
          </Button>
            </Paper>
        );
    }

}

export default PollForm