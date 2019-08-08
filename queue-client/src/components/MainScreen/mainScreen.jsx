
import React from 'react';
import styled from 'styled-components';
import QuestionScreen from '../QuestionScreen/QuestionScreen'
import QuestionAPI from '../../api/questionApi';
import {connect} from 'react-redux';
import PollScreen from '../PollsScreen/PollsScreen';
import PollApi from '../../api/pollsApi';
import AnsweredQuestions from '../AnsweredScreen/AnsweredScreen';
import {updatePolls, updateQuestion} from '../../actions/questionActions'
const Background = styled.div`
height: -webkit-fill-available;
`



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
      this.props.updateQuestions(data)
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
        <QuestionScreen />:null}
        {screenSetting.polls?
        <PollScreen/>:null}
        {screenSetting.answered?
        <AnsweredQuestions/>:null}
      </Background>
    );
  }

}
const mapStateToProps = state => ({
  screenSetting: state.screenSetting
});
const mapDispatchToProps = dispatch => ({
  updatePolls :polls => dispatch(updatePolls(polls)),
  updateQuestions:questions=>dispatch(updateQuestion(questions))
});


export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);