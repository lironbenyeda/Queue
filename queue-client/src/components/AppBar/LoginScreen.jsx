
import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='custom-ui'>
        <TextField
          id="filled-full-width"
          style={{ width: '80%' }}
          placeholder="שם משתמש"
          onChange={(event) => this.setState({ user: event.target.value })}
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="filled-full-width"
          style={{ width: '80%' }}
          placeholder="סיסמא"
          onChange={(event) => this.setState({ user: event.target.value })}
          margin="normal"
          type="password"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button onClick={() => this.props.onClose()}>No</button>
        <button
          onClick={() => {
            this.handleClickDelete();
            this.props.onClose();
          }}
        >
          Yes, Delete it!
        </button>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  
});



export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);