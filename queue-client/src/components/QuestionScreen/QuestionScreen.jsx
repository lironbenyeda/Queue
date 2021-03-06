import React from 'react';
import QuestionForm from './questionForm'
import Question from './Question';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateQuestion } from '../../actions/questionActions'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'

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
    changeTime = (value) => {
        if (value !== 'none')
            QuestionApi.getByDate(moment().subtract(value, "days").format("YYYY-MM-DD")).then(data => {
                this.props.updateQuestion(data)
            })
        else 
        {
            QuestionApi.getQuestions().then((data)=>this.props.updateQuestion(data))
        }
    }

    render() {

        return (<QuestionsScreen>
          
          <div style={{ width: "90%" }}>
            <Button title="הוסף שאלה" style={{ width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    position: 'relative',
                    right:'9%'
                    }} onClick={() => this.setState({ asking: true })}>
                <i style={{fontSize:"40px", marginTop: "10%"}} className="fa fa-plus"></i>
                </Button>
            <DropdownButton variant="outline-primary" id="dropdown-basic-button" title="סנן זמן" style={{
                width: 'fit-content',
                float: 'left',
            }}onSelect={this.changeTime}>
                <Dropdown.Item eventKey={'none'}>הכל</Dropdown.Item>
                <Dropdown.Item eventKey={'1'}>היום</Dropdown.Item>
                <Dropdown.Item eventKey={'7'}>השבוע</Dropdown.Item>
                <Dropdown.Item eventKey={'30'}>החודש</Dropdown.Item>
                <Dropdown.Item eventKey={'365'}>השנה</Dropdown.Item>
            </DropdownButton>
           </div>

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