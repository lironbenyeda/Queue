
import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Stars from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
class Question extends React.Component {

    render() {
        const question = this.props.question
        return (
            <Paper style={{ width: '80%', margin: 'auto' }}>
                <Typography variant="h4">
                    השאלה: {question.question}
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
                        //todo updaterank
                    }}/>
                </div>


            </Paper>
        );
    }

}

export default Question;