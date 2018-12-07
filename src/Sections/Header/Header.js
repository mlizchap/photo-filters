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
                Photo Filters
            </StyledHeader>
        );
    }
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 18pt;
`