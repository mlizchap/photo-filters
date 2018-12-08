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
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    padding: 5px;
    // height: 20px;
    color: white;
    margin-top: 20px;
    background-color: #38405e;
`