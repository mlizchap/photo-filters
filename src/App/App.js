import React, { Component } from 'react';
import styled from 'styled-components';

import Image from '../Sections/Image/Image';
import Preset from '../Sections/Preset/Preset';
import './App.css';
import CollapsableFilters from '../Sections/Filters/CollapsableFilters';
import CollapsableBackgroundContainer from '../Sections/Background/CollapsableBackgroundContainer';
import Header from '../Sections/Header/Header';
// import Footer from '../Sections/Footer/Footer';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <div className="app">
          {/* <div className="sticky"> */}
            <Image />
          {/* </div> */}
          <Preset />
          <CollapsableBackgroundContainer />
          <CollapsableFilters />
        </div>
        {/* <Footer /> */}
      </StyledApp>
    )
  }
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  font-family: ${props => props.theme.mainFont};
  
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .sticky {
    background-color: white;
    position: sticky;
    position: -webkit-skicky;
    top: 0;
  }
  .app {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
  }
  .app > div {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`