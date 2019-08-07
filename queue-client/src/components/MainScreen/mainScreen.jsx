
import React from 'react';
import styled from 'styled-components';
import QuestionScreen from '../QuestionScreen/QuestionScreen'
import QuestionAPI from '../../api/questionApi';
import {connect} from 'react-redux';
import PollScreen from '../PollsScreen/PollsScreen';
import PollApi from '../../api/pollsApi';
import AnsweredQuestions from '../AnsweredScreen/AnsweredScreen';
import {updatePolls} from '../../actions/questionActions'
const Background = styled.div`
height: -webkit-fill-available;
background: #476771;
`

const removeAnsweredQuestion =(questions)=>{
  return questions.filter(question=> question.isAnswered===false)
}
const onlyAnsweredQuestion=(questions)=>{
  return questions.filter(question=> question.isAnswered===true)
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
     this.props.updatePolls(data)
    })
  }
  render() {
    const screenSetting = this.props.screenSetting
    return (
      <Background>
        {screenSetting.questions? 
        <QuestionScreen reload={()=>QuestionAPI.getQuestions().then(data=>{
          this.setState({
            questions:data
          })
        })} questions={removeAnsweredQuestion(this.state.questions)}/>:null}
        {screenSetting.polls?
        <PollScreen/>:null}
        {screenSetting.answered?
        <AnsweredQuestions questions={onlyAnsweredQuestion(this.state.questions)}/>:null}
      </Background>
    );
  }

}
const mapStateToProps = state => ({
  screenSetting: state.screenSetting
});
const mapDispatchToProps = dispatch => ({
  updatePolls :polls => dispatch(updatePolls(polls))  
});


export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);