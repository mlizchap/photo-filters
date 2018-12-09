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
// import Footer from '../Sections/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: ""
    }
  }

  updateDimensions = (windowSize) => {
    this.setState({ windowSize })
  }

  componentDidMount = () => {
    window.addEventListener("resize", () => this.updateDimensions(window.innerWidth) );
  }
  componentWillMount = () => {
    this.updateDimensions(window.innerWidth) 
  }

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
          console.log(context.state.windowSize)
          return (
            <StyledApp>
              <Header />
                { (context.state.windowSize > 1080) ? 
                    this.renderDesktopView() : this.renderMobileView() 
                }
              {/* <Footer />  */}
            </StyledApp>
          )
        }}
      </MyContext.Consumer>


    )
  }
}

        // // MOBILE VIEW       
        // <div className="mainContent">
        //   <Image />
        //   <Preset />
        //   <CollapsableBackgroundContainer />
        //   <CollapsableFilters />
        //   <CollapsableCodeContainer />
        // </div>





export default App;

const StyledApp = styled.div`
  width: 100%;
  font-family: ${props => props.theme.mainFont};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .mainContent {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
  }
  .mainContent > div {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  // DESKTOP VIEW
  .mainContent_desktop {
    display: flex;
    margin: 50px 100px; 
  }
  .leftColumn {
    width: 50%;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
  }
  .rightColumn {
    width: 50%;
    display: flex;
    flex-direction: column;
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