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
                <a href="https://github.com/mlizchap/photo-filters">View Source</a>
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
    font-size: 10pt;
    width: 100%;
    padding: 10px 0px;
    background-color: ${props => props.theme.darkBg};
    font-family: ${props => props.theme.mainFont};
    a {
        text-decoration: none;
        color: white;
        &:hover {
            color: ${props => props.theme.light};
        }
    }
`