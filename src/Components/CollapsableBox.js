import React from "react";
import posed from "react-pose";
import styled from "styled-components";

import { MyContext } from '../Data/Provider';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});


class CollapsableBox extends React.Component {
  state = { open: true };
  toggleOpen = () => {
    
    this.setState({ open: !this.state.open });
  };
  renderMobileView = () => {
    return (
      <React.Fragment>
        <h2 className="sectionTitle" onClick={this.toggleOpen}>
          {this.props.title}
        </h2>
        <Content className="sectionContent" pose={this.state.open ? "open" : "closed"}>
          <h3>{this.props.content}</h3>
        </Content>
      </React.Fragment>
    )
  }
  renderDesktopView = () => {
    return (
      <React.Fragment>
        <h2 className="sectionTitle">
          {this.props.title}
        </h2>
        <Content className="sectionContent" pose="open">
          <h3>{this.props.content}</h3>
        </Content>
      </React.Fragment>
    )
  }
  render() {
    return (
      <MyContext.Consumer>
          {context => {
              return (
                  <div>
                    <StyledCollapsableBox isMobile={context.state.isMobileWidth} {...this.props}>
                      {(context.state.isMobileWidth) ? this.renderMobileView() : this.renderDesktopView()}

                    </StyledCollapsableBox>
                  </div>
              )
          }}
      </MyContext.Consumer>
    );
  }
}


export default CollapsableBox;

const StyledCollapsableBox = styled.div`
    
    .sectionTitle {
        cursor: ${(props => props.isMobile ? 'pointer' : 'auto')};
        background: ${props => props.tint ? props.theme.tints.main : 
                        (props.filter) ? props.theme.filters.main : 
                          (props.code) ? props.theme.code.main : "green" };
        color: ${props => props.tint ? props.theme.tints.dark : 
                  props.filter ? props.theme.filters.dark : 
                    props.code ? props.theme.code.dark : "pink" };

        padding: 8px 0px;
        text-align: center;
        font-family: ${props => props.theme.titleFont};
        margin-bottom: 0;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: .1rem;
    }
    .sectionContent {
        overflow: scroll;
        margin-top: 0;
        padding-top: 0;
        overflow: hidden;

        color: white;
        background: ${props => props.theme.darkBg}
        //background: rgba(0, 0, 0, 0.8);
      }
`