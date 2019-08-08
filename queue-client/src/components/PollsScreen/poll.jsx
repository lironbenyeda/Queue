
import React from 'react';
import Stars from '@material-ui/icons/Stars';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import PollApi from '../../api/pollsApi';

class Poll extends React.Component {

    render() {
        const poll = this.props.poll
        const myData = poll.answers.map((answer, index) => {
            return {
                angle: answer.rank,
                label: answer.text,            
            }
        })

        return (
            <Paper style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                <Typography variant="h4">
                    {poll.text}
                </Typography>
                <Typography variant="h5">
                    מספר הצבעות: {poll.sumRank}
                </Typography>
                <Typography variant="body1" >
                    נשאלה בתאריך :{moment(poll.date).format('DD/MM/YYYY')}
                </Typography>
                <div style={{
                    width: 'fit-content',
                    marginRight: 'auto',
                    position: 'relative',
                    right: '-20px',
                }}>

                    <RadialChart
                        showLabels={true}
                        data={myData}
                        width={300}
                        height={300} />
                </div>
                <div>
                    {poll.answers.length > 0 ?
                        poll.answers.map((answer, index) => {
                            return (<div key={index}>
                                <span>{answer.text}</span>
                                <Stars onClick={() => {
                                    let newPoll = poll
                                    newPoll.answers[index].rank = newPoll.answers[index].rank + 1

                                    PollApi.updatePoll(newPoll).then((data) => {
                                        console.table(data.answers)
                                        this.props.updatePoll(data)
                                    })
                                }} />
                            </div>)
                        }) : null}
                </div>

            </Paper>
        );
    }

}



export default Poll;