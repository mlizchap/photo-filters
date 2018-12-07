import React, { Fragment } from "react";
import posed from "react-pose";
import styled from "styled-components";

const Content = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

// class App extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>Accordian demo</h1>
//         <Example content="something" />
//         <br />
//         <Example content="something else" />
//       </Fragment>
//     );
//   }
// }

class CollapsableBox extends React.Component {
  state = { open: false };
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <StyledCollapsableBox>
        <h2 className="sectionTitle" onClick={this.toggleOpen}>
          {this.props.title}
        </h2>
        <Content className="sectionContent" pose={this.state.open ? "open" : "closed"}>
          <h3>{this.props.content}</h3>
        </Content>
      </StyledCollapsableBox>
    );
  }
}


export default CollapsableBox;

const StyledCollapsableBox = styled.div`
    .sectionTitle {
        cursor: pointer;
        background-image: linear-gradient(-180deg, #ff1c68 0%, #9f0092 300px);
        padding: 8px 0px;
        text-align: center;
        // border-bottom: 1px solid #9f0092;
        margin-bottom: 0;
        font-size: 12px;
    }
    .sectionContent {
        margin-top: 0;
        padding-top: 0;
        overflow: hidden;

        color: white;
        background: rgba(0, 0, 0, 0.8);
      }
`