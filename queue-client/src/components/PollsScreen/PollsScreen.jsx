import React from 'react';
import PollForm from './pollForm'
import Poll from './poll'
import styled from 'styled-components';
import PollsApi from '../../api/pollsApi';
import { connect } from 'react-redux';
import { updatePolls } from '../../actions/questionActions'
import moment from 'moment'

const Div = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
const sortPollsBySum = (questions) => {
    return questions.sort((q1, q2) => q2.sumRank - q1.sumRank)
}
class PollsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asking: false,
            polls: this.props.polls
        }
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        console.table(newProps.polls[2].answers)
        this.setState({
            polls: newProps.polls
        })
    }
    pollSent = () => {
        PollsApi.getPolls().then((data) => {
            this.setState({
                asking: false,
                polls: data
            })
        })

    }
    changeTime = (event) => {
        if (event.target.value !== 'none')
            PollsApi.getByDate(moment().subtract(event.target.value, "days").format("YYYY-MM-DD")).then(data => {
                this.props.updatePolls(data)
            })
        else {
            PollsApi.getPolls().then((data) => this.props.updatePolls(data))
        }
    }
    render() {

        return (<Div>
            <select onChange={(event) => this.changeTime(event)}>
                <option value={'none'}>סנן זמן</option>
                <option value={'1'}>היום</option>
                <option value={'7'}>השבוע</option>
                <option value={'30'}>החודש</option>
                <option value={'365'}>השנה</option>
            </select>
            <button onClick={() => this.setState({ asking: true })}>הוסף סקר</button>
            {this.state.asking ? <PollForm pollSent={() => this.pollSent()}></PollForm> : null}
            <div style={{ 'marginTop': '5%' }}>
                {this.state.polls && this.state.polls.length > 0 ?
                    sortPollsBySum(this.state.polls).map((poll, index) => {
                        return (<Poll key={index} poll={poll} updatePoll={(poll) => {
                            const newPolls = this.state.polls.map((pollNoNeeded, indexToReplace) => {
                                if (index === indexToReplace)
                                    return poll
                                return pollNoNeeded
                            })
                            this.props.updatePolls(newPolls)

                        }} />)
                    })
                    : null}
            </div>
        </Div>)
    }
}
const mapStateToProps = state => ({
    polls: state.polls
});
const mapDispatchToProps = dispatch => ({
    updatePolls: polls => dispatch(updatePolls(polls))
});



export default connect(mapStateToProps, mapDispatchToProps)(PollsScreen)