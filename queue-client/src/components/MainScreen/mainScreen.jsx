
import React from 'react';
import styled from 'styled-components';
import QuestionScreen from '../QuestionScreen/QuestionScreen'
import QuestionAPI from '../../api/questionApi';
import {connect} from 'react-redux';
import PollScreen from '../PollsScreen/PollsScreen';
import PollApi from '../../api/pollsApi';
const Background = styled.div`
height: -webkit-fill-available;
background: #476771;
`

const removeAnsweredQuestion =(questions)=>{
  return questions.filter(question=> question.isAnswered===false)
}
class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      asking: false,
      questions: [],
      polls:[]
    }
  }
  componentDidMount(){
    QuestionAPI.getQuestions().then(data=>{
      this.setState({
        questions:data
      })
    })
    PollApi.getPolls().then(data=>{
      this.setState({
        polls:data
      })
    })
  }
  render() {
    const screenSetting = this.props.screenSetting
    return (
      <Background>
        {screenSetting.questions? 
        <QuestionScreen questions={removeAnsweredQuestion(this.state.questions)}/>:null}
        {screenSetting.polls?
        <PollScreen polls={this.state.polls}/>:null}
      </Background>
    );
  }

}
const mapStateToProps = state => ({
  screenSetting: state.screenSetting
});
const mapDispatchToProps = dispatch => ({
 
});


export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);