
import React from 'react';
import styled from 'styled-components';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import LoginScreen from './LoginScreen'
import { Provider } from 'react-redux'
import {reduxStore} from '../../App'
import Button from 'react-bootstrap/Button'

const AppBanner = styled.div`
    height: 120px;
    background: white;
    font-size: xx-large;
`
class AppBar extends React.Component {

  render() {
    return (
      <AppBanner>
        <span style={{'font-size': "70px",'font-family': "cursive"}}>Queue</span>
        <Button variant="light" size="sm" style={{float: "left",position: "relative",margin: "1%"}} onClick={() =>
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <Provider store={reduxStore}>
                  <LoginScreen onClose={()=>onClose()}></LoginScreen>
                </Provider>
              );
            }
          })
        }>היכנס</Button>

       
      </AppBanner>
    );
  }

}

export default AppBar;