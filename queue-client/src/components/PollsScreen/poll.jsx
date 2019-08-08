
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import { connect } from 'react-redux';
import { updatePolls } from '../../actions/questionActions'
import '../../../node_modules/react-vis/dist/style.css';
import PollApi from '../../api/pollsApi';
import Poll from 'react-polls'

class PollDiv extends React.Component {
constructor(props){
    super(props)
    this.state={
        poll:this.props.poll
    }
}
    newVote = (vote) => {        
        const newPolls = this.props.polls.map(poll => {
            if (poll._id === this.props.poll._id) {
                poll.sumRank++;
                poll.answers.map(answer => {
                    if (answer.text === vote) {
                        answer.rank++;                        
                        PollApi.updatePoll(poll).then(()=>{
                            this.setState({
                                poll:poll
                            })
                        })
                    }
                    return answer
                })
            }
            return poll
        });
        this.props.updatePolls(newPolls);
    }

    render() {
        const poll = this.state.poll
        const myData = poll.answers.map((answer, index) => {
            return {
                votes: answer.rank,
                option: answer.text,
            }
        })

        return (
            <Paper style={{ width: '80%', margin: 'auto', marginTop: '5%' }}>
                <div style={{
                       margin: 'auto',
                       width: '80%',
                }}>
                    <Poll answers={myData} question={poll.text} onVote={(text) => this.newVote(text)}></Poll>
                </div>
                <Typography variant="body1" >
                    נשאלה בתאריך :{moment(poll.created_date).format('DD/MM/YYYY')}
                </Typography>

            </Paper >
        );
    }

}



const mapStateToProps = state => ({
    polls: state.polls
});
const mapDispatchToProps = dispatch => ({
    updatePolls: polls => dispatch(updatePolls(polls))
});



export default connect(mapStateToProps, mapDispatchToProps)(PollDiv)