
import React from 'react';
import styled from 'styled-components';
import QuestionForm from '../QuestionForm/questionForm'

const Background = styled.div`
height: -webkit-fill-available;
background: #476771;
`
const Questions = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
class MainScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      asking:false
    }
  }
  render() {
    return (
      <Background>
       <Questions>
        <button onClick={()=>this.setState({asking:true})}>שאל</button>
        {this.state.asking? <QuestionForm></QuestionForm>:null}
       </Questions>
     </Background>
    );
  }

}

export default MainScreen;