import React from 'react';
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'

const QuestionsScreen = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
const sortQuestionsByRank = (questions) => {
    return questions.sort((q1, q2) => q2.rank - q1.rank)
}
const onlyAnsweredQuestion = (questions) => {
    return questions.filter(question => question.isAnswered === true)
}
class AnsweredQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asking: false
        }
    }
    changeTime = () => {

    }
    render() {
        return (<QuestionsScreen>
             <div style={{width:"90%"}}>
             <DropdownButton variant="outline-primary" style={{float: "left"}} id="dropdown-basic-button" title="סנן זמן" onSelect={this.changeTime}>
                <Dropdown.Item eventKey={'none'}>הכל</Dropdown.Item>
                <Dropdown.Item eventKey={'1'}>היום</Dropdown.Item>
                <Dropdown.Item eventKey={'7'}>השבוע</Dropdown.Item>
                <Dropdown.Item eventKey={'30'}>החודש</Dropdown.Item>
                <Dropdown.Item eventKey={'365'}>השנה</Dropdown.Item>
            </DropdownButton>
            </div>
            <div style={{ 'marginTop': '5%' }}>
                {this.props.questions && this.props.questions.length > 0 ?
                    sortQuestionsByRank(this.props.questions).map((question, index) => {
                        return (<AnsweredQuestion key={index} question={question} />)
                    }) : null}

            </div>
        </QuestionsScreen>)
    }
}
const mapStateToProps = state => ({
    questions: onlyAnsweredQuestion(state.questions)
});
const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(AnsweredQuestions)