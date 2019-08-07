
import React from 'react';
import styled from 'styled-components';
import QuestionForm from '../QuestionForm/questionForm'
import Question from '../QuestionForm/Question'
const Background = styled.div`
height: -webkit-fill-available;
background: #476771;
`
const QuestionsScreen = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      asking: false,
      questions: [{
        question: 'מה ייתן המעבר לנגב?',
        rank: 5,
        answers: [{
          answer: 'תשובה של אלמ',
          date: new Date(),
          user: 'מירון'

        }],
        date: new Date(),
        isAnswered: false

      }]
    }
  }
  questionSent = () => {
    //todo get all then
    this.setState({ asking: false })
  }
  render() {
    return (
      <Background>
        <QuestionsScreen>
          <button onClick={() => this.setState({ asking: true })}>שאל</button>
          {this.state.asking ? <QuestionForm QuestionSent={() => this.questionSent}></QuestionForm> : null}
          <span>שאלות שנשאלו הכי הרבה</span>
          <div style={{'marginTop':'5%'}}>

            {this.state.questions && this.state.questions.length > 0 ?
              this.state.questions.map((question, index) => {
                return (<Question key={index} question={question} />)
              })
              : null}
          </div>
        </QuestionsScreen>
      </Background>
    );
  }

}

export default MainScreen;