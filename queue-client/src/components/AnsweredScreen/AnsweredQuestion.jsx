
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Stars from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
class AnsweredQuestion extends React.Component {

    render() {
        const question = this.props.question
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
                    </span><Stars/>
                </div>
                {question.answers.length > 0 ? question.answers.map((answer, index) => {
                    return (<div key={index} style={{
                        'display': 'flex',
                        'flexDirection': 'column'
                    }}>
                        <span>תשובה:</span>
                        <span>{answer.text}</span>
                        <span>על ידי:</span>
                        <span>{answer.user}</span>
                        <span>תאריך:</span>
                        <span>{moment(answer.date).format('DD/MM/YYYY')}</span>
                    </div>)
                }) : null
                }


            </Paper>
        );
    }

}

export default AnsweredQuestion;