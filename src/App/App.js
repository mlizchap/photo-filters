import React, { Component } from 'react';
import styled from 'styled-components';

import Image from '../Sections/Image/Image';
import Filters from '../Sections/Filters/Filters';
import Preset from '../Sections/Preset/Preset';
import './App.css';
import SolidBackground from '../Sections/Background/SolidBackground';
import GradientBackground from '../Sections/Background/GradientBackground';
import BlendmodeSelect from '../Components/BlendmodeSelect/BlendmodeSelect';
import BackgroundContainer from '../Sections/Background/BackgroundContainer';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Image />
        <Preset />
        <BackgroundContainer />
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