import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledFooter>
                View Source
            </StyledFooter>
        );
    }
}

export default Footer;

const StyledFooter = styled.div`
    margin: auto auto 0 auto;
    //position:fixed;
    bottom:0;
    left:0;
    right:0;
    color: white;
    text-align: center;
    font-size: 8pt;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.darkBg};
    font-family: ${props => props.theme.mainFont};
`