
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { updateUser } from '../../actions/questionActions'
import axios from 'axios'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }
  login = () => {
    axios.get('http://129.213.134.160/users/' + this.state.user + '/' + this.state.password).then(data => {
      if (data.data === true) {
        this.props.updateUser(this.state.user)
        this.props.onClose();
      }
      else
        this.setState({
          auth: 'Failed'
        })
    })
  }
  render() {
    return (
      <div className='custom-ui'>
        <div>

          <TextField
            id="filled-full-width"
            style={{ width: '80%' }}
            placeholder="שם משתמש"
            onChange={(event) => this.setState({ user: event.target.value })}
            margin="normal"
            variant="filled"
            InputLabelProps={{shrink: true}}
          />
          <TextField
            id="filled-full-width"
            style={{ width: '80%' }}
            placeholder="סיסמא"
            onChange={(event) => this.setState({ password: event.target.value })}
            margin="normal"
            type="password"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        {this.state.auth === 'Failed' ? <span style={{
          color: 'red',
          marginLeft: '4px'
        }}>שם משתמש או סיסמא לא נכונים</span> : null}

        <Button variant="contained" color="primary" onClick={() => this.login()} style={{ float: "right", marginRight: '90px' }}>
          היכנס
          </Button>
        <Button variant="contained" color="secondary" onClick={() => this.props.onClose()}>
          בטל
          </Button>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);