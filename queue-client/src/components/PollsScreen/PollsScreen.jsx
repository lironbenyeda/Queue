import React from 'react';
import PollForm from './pollForm'
import Poll from './poll'
import styled from 'styled-components';
const Div = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
const sortPollsBySum = (questions) => {
    return questions.sort((q1, q2) => q2.sum - q1.sum)
}
class PollsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asking: false
        }
    }
    pollSent = () => {
        //todo get all then
        
        this.setState({ asking: false })
      }
      changeTime=()=>{
          
    }
    render() {

        return (<Div>
             <select onChange={()=>this.changeTime()}>               
                <option value={'none'}>סנן זמן</option>
                <option value={'today'}>היום</option>
                <option value={'week'}>השבוע</option>
                <option value={'month'}>החודש</option>
                <option value={'year'}>השנה</option>
            </select>
            <button onClick={() => this.setState({ asking: true })}>הוסף סקר</button>
            {this.state.asking ? <PollForm pollSent={() => this.pollSent()}></PollForm> : null}
            <div style={{ 'marginTop': '5%' }}>
                {this.props.polls && this.props.polls.length > 0 ?
                    sortPollsBySum(this.props.polls).map((poll, index) => {
                        return (<Poll key={index} poll={poll} />)
                    })
                    : null}
            </div>
        </Div>)
    }
}

export default PollsScreen