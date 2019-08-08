
import React from 'react';
import styled from 'styled-components';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import LoginScreen from './LoginScreen'
import { Provider } from 'react-redux'
import {reduxStore} from '../../App'
const AppBanner = styled.div`
    height: 80px;
    background: lightgray;
    font-size: xx-large;
`
class AppBar extends React.Component {

  render() {
    return (
      <AppBanner>
        <span>Queue</span>
        <button onClick={() =>
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <Provider store={reduxStore}>
                  <LoginScreen onClose={()=>onClose()}></LoginScreen>
                </Provider>
              );
            }
          })
        }>היכנס</button>
      </AppBanner>
    );
  }

}

export default AppBar;