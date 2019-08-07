
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
class Question extends React.Component {

    render() {
        const poll = this.props.poll
        const myData = this.props.poll.answers.map((answer,index)=>{
            return {
                angle:answer.rank,
                label:answer.answer,
                labelStyle:{
                    color:'red'
                }
            }
        })
        console.log(myData)
        return (
            <Paper style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                <Typography variant="h4">
                    {poll.question}
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


            </Paper>
        );
    }

}

export default Question;