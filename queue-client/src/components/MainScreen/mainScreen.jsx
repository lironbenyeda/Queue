
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
height: -webkit-fill-available;
background: #476771;
`
const Questions = styled.div`
background: white;
width:80%;
margin:auto;
height: -webkit-fill-available;
padding-top:3%
`
class MainScreen extends React.Component {

  render() {
    return (
      <Background>
       <Questions>
        
       </Questions>
     </Background>
    );
  }

}

export default MainScreen;