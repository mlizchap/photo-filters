import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../Data/Provider';
import Image from '../Sections/Image/Image';
import Preset from '../Sections/Preset/Preset';
import './App.css';
import CollapsableFilters from '../Sections/Filters/CollapsableFilters';
import CollapsableBackgroundContainer from '../Sections/Background/CollapsableBackgroundContainer';
import Header from '../Sections/Header/Header';
import CollapsableCodeContainer from '../Sections/Code/CollapsableCodeContainer';
import Footer from '../Sections/Footer/Footer';

class App extends Component {

  renderDesktopView = () => {
    return (
      <div className="mainContent_desktop">
        <div className="leftColumn">
          <Image />
          <CollapsableCodeContainer />
        </div>
        <div className="rightColumn">
          <Preset />
          <CollapsableBackgroundContainer />
          <CollapsableFilters />
        </div>
      </div>
    )
  }

  renderMobileView = () => {
    return (
        <div className="mainContent">
           <Image />
           <Preset />
           <CollapsableBackgroundContainer />
           <CollapsableFilters />
           <CollapsableCodeContainer />
         </div>
    )
  }


  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <StyledApp isMobileWidth={context.state.isMobileWidth}>
              <Header />
                { (context.state.isMobileWidth) ? 
                    this.renderMobileView() : this.renderDesktopView() 
                }
              <Footer /> 
            </StyledApp>
          )
        }}
      </MyContext.Consumer>


    )
  }
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  font-family: ${props => props.theme.isMobileWidth};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .mainContent {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
    max-width: 500px;
  }
  .mainContent > div {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  // DESKTOP VIEW
  .mainContent_desktop {
    display: flex;
    max-width: 1000px;
    margin: 20px auto; 
    // background-color: ${props => props.theme.lightestBg};
    // padding: 20px;
    border-radius: ${props => props.theme.borderRadius};
  }
  .leftColumn {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    width: ${props => props.isMobileView ? '100%' : '400px'};
    justify-content: flex-end;
  }
  .rightColumn > div, .leftColumn > div {
    margin-bottom: 10px;
  }
  .rightColumn {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }



`
/*  to make the footer sticky */
/*
.sticky {
  background-color: white;
  position: sticky;
  position: -webkit-skicky;
  top: 0;
}
*/