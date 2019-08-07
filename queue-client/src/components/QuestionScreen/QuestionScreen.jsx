import React from 'react';
import QuestionForm from './questionForm'
import Question from './Question';
import styled from 'styled-components';

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
class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            asking: false,
            timeInHebrew:'סנן זמן'
        }
    }
    questionSent = () => {
        //todo get all then
        this.setState({ asking: false })
    }
    changeTime = (event) => {
        console.log(event.target.value)
        
    }
    render() {
        console.log(this.state.timeInHebrew)
        return (<QuestionsScreen>
           <select onChange={()=>this.changeTime()}>               
                <option value={'none'}>סנן זמן</option>
                <option value={'today'}>היום</option>
                <option value={'week'}>השבוע</option>
                <option value={'month'}>החודש</option>
                <option value={'year'}>השנה</option>
            </select>
            <button onClick={() => this.setState({ asking: true })}>שאל</button>
            {this.state.asking ? <QuestionForm QuestionSent={() => this.questionSent}></QuestionForm> : null}

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

export default Questions