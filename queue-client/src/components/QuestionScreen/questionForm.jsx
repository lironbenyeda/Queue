import React from 'react';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {updateQuestion} from '../../actions/questionActions';
import QuestionApi from '../../api/questionApi'

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: ''
        }
    }
    sendQuestion=()=>{ 
        QuestionApi.postQuestion(this.state.question).then((res)=>{
            console.log(this.props.questions.concat(res))
            this.props.updateQuestion(this.props.questions.concat(res))
            this.props.QuestionSent()         
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
                    label="שאל שאלה"
                    style={{ width: '80%' }}
                    placeholder=""
                    onChange={(event) => this.setState({ question: event.target.value })}
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" color="primary" onClick={()=>this.sendQuestion()}style={{
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

const mapStateToProps = state => ({
    questions: state.questions
  });
  const mapDispatchToProps = dispatch => ({
    updateQuestion: questions => dispatch(updateQuestion(questions))  
  });
  
  
export default connect(mapStateToProps,mapDispatchToProps)(QuestionForm);