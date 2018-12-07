import React, { Component } from 'react';
import styled from 'styled-components';

import Image from '../Sections/Image/Image';
import Filters from '../Sections/Filters/Filters';
import Preset from '../Sections/Preset/Preset';
import './App.css';
import BackgroundContainer from '../Sections/Background/BackgroundContainer';
import Slider from '../Components/Slider';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <div className="app">
        <Image />
        <Preset />
        <BackgroundContainer />
        <Filters />
        </div>
      </StyledApp>
    )
  }
}

export default App;

const StyledApp = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  .app > div {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`