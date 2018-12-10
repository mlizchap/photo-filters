import React, { Component } from 'react';
import styled from 'styled-components';

class NoBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledNoBackground>
                Click on either the solid or gradient button to add a tint to the image.
            </StyledNoBackground>
        );
    }
}

export default NoBackground;

const StyledNoBackground = styled.div`
    margin: 30px;
    color: #696c77;
    font-family: ${props => props.titleFont};
    letter-spacing: .05rem;
    font-style: italic;
`