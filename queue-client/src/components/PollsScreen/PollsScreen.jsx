import React from 'react';
import PollForm from './pollForm'
import Poll from './poll'
import styled from 'styled-components';
import PollsApi from '../../api/pollsApi';
import { connect } from 'react-redux';
import { updatePolls } from '../../actions/questionActions'
import moment from 'moment'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'

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
    changeTime = (value) => {
        if (value !== 'none')
            PollsApi.getByDate(moment().subtract(value, "days").format("YYYY-MM-DD")).then(data => {
                this.props.updatePolls(data)
            })
        else {
            PollsApi.getPolls().then((data) => this.props.updatePolls(data))
        }
    }
    render() {

        return (<Div>
          
            <div style={{width:"90%"}}>
            <Button title="הוסף סקר" style={{margin:"auto", width:"70px", height:"70px", borderRadius:"50%"}} onClick={() => this.setState({ asking: true })}>
                <i style={{fontSize:"40px", marginTop: "10%"}} className="fa fa-plus"></i>
                </Button>
            <DropdownButton variant="outline-primary" style={{float: "left"}} id="dropdown-basic-button" title="סנן זמן" onSelect={this.changeTime}>
                <Dropdown.Item eventKey={'none'}>הכל</Dropdown.Item>
                <Dropdown.Item eventKey={'1'}>היום</Dropdown.Item>
                <Dropdown.Item eventKey={'7'}>השבוע</Dropdown.Item>
                <Dropdown.Item eventKey={'30'}>החודש</Dropdown.Item>
                <Dropdown.Item eventKey={'365'}>השנה</Dropdown.Item>
            </DropdownButton>
            </div>


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