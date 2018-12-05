import React, { Component } from 'react';
import styled from 'styled-components';

import Image from '../Sections/Image/Image';
import Filters from '../Sections/Filters/Filters';
import Preset from '../Sections/Preset/Preset';
import './App.css';
import SolidBackground from '../Sections/Background/SolidBackground';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Image />
        <Preset />
        <SolidBackground />
        <Filters />
      </StyledApp>
    )
  }
}

export default App;

const StyledApp = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
`