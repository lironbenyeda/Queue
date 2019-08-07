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
    render() {

        return (<Div>
            <button onClick={() => this.setState({ asking: true })}>הוסף סקר</button>
            {this.state.asking ? <PollForm pollSent={() => this.pollSent()}></PollForm> : null}
            <div style={{ 'marginTop': '5%' }}>
                {this.props.polls && this.props.polls.length > 0 ?
                    this.props.polls.map((poll, index) => {
                        return (<Poll key={index} poll={poll} />)
                    })
                    : null}
            </div>
        </Div>)
    }
}

export default PollsScreen