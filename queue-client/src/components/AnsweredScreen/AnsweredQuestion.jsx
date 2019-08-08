
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
                <Typography variant="body1" style={{
                    position: 'relative',
                    right: '3%',
                }}>
                    נשאלה בתאריך :{moment(question.date).format('DD/MM/YYYY')}
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
                    </span><Stars />
                </div>
                {question.answers.length > 0 ? question.answers.map((answer, index) => {
                    return (<Paper key={index} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '80%',
                        margin: 'auto',
                        marginTop: '1%',
                        background: 'white',
                        marginBottom: '1%'
                    }}>
                        <div>
                            <Typography variant="h5">{answer.text}</Typography>
                        </div>
                        <div style={{ fontSize: '10px' }}>

                            <span>
                                על ידי:
                            </span>
                            <span>{answer.user}</span>
                        </div>
                        <div style={{ fontSize: '10px' }}>

                            <span>תאריך:</span>
                            <span>{moment(answer.date).format('DD/MM/YYYY')}</span>
                        </div>
                    </Paper>)
                }) : null
                }


            </Paper>
        );
    }

}

export default AnsweredQuestion;