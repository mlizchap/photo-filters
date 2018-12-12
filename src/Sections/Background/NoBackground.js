import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';

class NoBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    return (
                        <div>
                            <StyledNoBackground isMobile={context.state.isMobileWidth}>
                                Click on either the solid or gradient button to add a tint to the image.
                            </StyledNoBackground>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        );
    }
}

export default NoBackground;

const StyledNoBackground = styled.div`
    // margin:  ${props => props.isMobile ? '30px 0px' : '30px'};;
    margin-top: 30px;
    color: #696c77;
    font-family: ${props => props.titleFont};
    letter-spacing: .05rem;
    font-style: italic;
    font-size: ${props => props.isMobile ? '10pt' : '14pt'};
`