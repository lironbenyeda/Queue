
import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeScreen } from '../../actions/questionActions'
const Bar = styled.div`
    height: 50px;
    background: lightblue;

`
class SearchBar extends React.Component {

  showQuestionsOnly = () => {
    this.props.changeScreen({
      questions: true,
      polls: false,
      answered: false
    })
  }
  showAnsweredOnly = () => {
    this.props.changeScreen({
      questions: false,
      polls: false,
      answered: true
    })
  }
  showPollsOnly = () => {
    this.props.changeScreen({
      questions: false,
      polls: true,
      answered: false
    })
  }
  render() {
    return (
      <Bar>
        <Grid item>
          <Button variant="contained" onClick={() => this.showQuestionsOnly()}>
            שאלות
          </Button>
          <Button variant="contained" onClick={() => this.showPollsOnly()}>
            סקרים
          </Button>
          <Button variant="contained" onClick={() => this.showAnsweredOnly()}>
            תשובות
          </Button>
        </Grid>
      </Bar>
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