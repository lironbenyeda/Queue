
import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux';
import { changeScreen } from '../../actions/questionActions'
const divStyle = {
  color: 'red'
};
class SearchBar extends React.Component {
  handleSelect = eventKey => {
    this.props.changeScreen({
      questions: eventKey === 'questions',
      polls: eventKey ==='polls',
      answered: eventKey === 'answers'
    })
  }

  

  render() {
    return (
      <Tabs fill defaultActiveKey="questions" id="uncontrolled-tab-example" onSelect={this.handleSelect}>
        <Tab eventKey="polls" title="סקרים" style={divStyle}/>
        <Tab eventKey="questions" title="שאלות"/>
        <Tab eventKey="answers" title="שאלות שנענו"/>
      </Tabs>
    );
  }

}
const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  changeScreen: screenSetting => dispatch(changeScreen(screenSetting))
});



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);