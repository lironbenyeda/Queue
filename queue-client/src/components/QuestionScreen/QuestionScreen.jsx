import React from 'react';
import QuestionForm from './questionForm'
import Question from './Question';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateQuestion } from '../../actions/questionActions'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import QuestionApi from '../../api/questionApi'
import moment from 'moment';

const QuestionsScreen = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
const removeAnsweredQuestion = (questions) => {
    return questions.filter(question => question.isAnswered === false)
}
const sortQuestionsByRank = (questions) => {
    return questions.sort((q1, q2) => q2.rank - q1.rank)
}

class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asking: false,
        }
    }
    questionSent = () => {
        this.setState({ asking: false })
    }
    changeTime = (event) => {
        if (event.target.value !== 'none')
            QuestionApi.getByDate(moment().subtract(event.target.value, "days").format("YYYY-MM-DD")).then(data => {
                this.props.updateQuestion(data)
            })
        else 
        {
            QuestionApi.getQuestions().then((data)=>this.props.updateQuestion(data))
        }
    }

    handleSelect = eventKey => {
       alert(eventKey)
      }

    render() {

        return (<QuestionsScreen>
            <select onChange={(event) => this.changeTime(event)}>
                <option value={'none'}>סנן זמן</option>
                <option value={'1'}>היום</option>
                <option value={'7'}>השבוע</option>
                <option value={'30'}>החודש</option>
                <option value={'365'}>השנה</option>
            </select>
            <button onClick={() => this.setState({ asking: true })}>שאל</button>

            <DropdownButton id="dropdown-basic-button" style={{background:"red"}} title="סנן זמן" onSelect={this.handleSelect}>
                <Dropdown.Item eventKey={'today'}>היום</Dropdown.Item>
                <Dropdown.Item eventKey={'week'}>השבוע</Dropdown.Item>
                <Dropdown.Item eventKey={'month'}>החודש</Dropdown.Item>
                <Dropdown.Item eventKey={'year'}>השנה</Dropdown.Item>
            </DropdownButton>


            {this.state.asking ? <QuestionForm QuestionSent={() => this.questionSent()}></QuestionForm> : null}

            <div style={{ 'marginTop': '5%' }}>

                {this.props.questions && this.props.questions.length > 0 ?
                    sortQuestionsByRank(this.props.questions).map((question, index) => {
                        return (<Question key={index} question={question} />)
                    })
                    : null}
            </div>
        </QuestionsScreen>)
    }
}
const mapStateToProps = state => ({
    questions: removeAnsweredQuestion(state.questions)
});
const mapDispatchToProps = dispatch => ({
    updateQuestion: question => dispatch(updateQuestion(question)),

});


export default connect(mapStateToProps, mapDispatchToProps)(Questions)