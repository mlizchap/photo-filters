import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledHeader>
                <div className="titleWrapper">
                    <h4>PHOTO FILTERS</h4>
                </div>
            </StyledHeader>
        );
    }
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    background-color: ${props => props.theme.darkBg};
    color: white;
    text-align: center;
    .titleWrapper {
        // background-color: red;
        display: inline-block;
        width: 400px;
    }
    padding: 10px 0;
    font-size: 24pt;
    font-family: ${props => props.theme.titleFont};
    h4{
        padding: 0px;
        margin: 0;
        background: linear-gradient(to right, ${props => props.theme.presets.main} 0%, ${props => props.theme.tints.main} 50%, ${props => props.theme.code.main} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: .1rem;
    }
`