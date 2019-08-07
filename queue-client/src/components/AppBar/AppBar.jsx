
import React from 'react';
import styled from 'styled-components';

const AppBanner = styled.div`
    height: 80px;
    background: lightgray;
    font-size: xx-large;
`
class AppBar extends React.Component {

  render() {
    return (
      <AppBanner>
        Queue
     </AppBanner>
    );
  }

}

export default AppBar;