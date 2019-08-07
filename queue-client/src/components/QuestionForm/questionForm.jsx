import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: ''
        }
    }
    sendQuestion=()=>{

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

export default QuestionForm;