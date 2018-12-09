import React, { Component } from 'react';
import styled from 'styled-components';

// import HTMLCode from './HTMLCode';
import CSSCode from './CSSCode';

class CodeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledCodeContainer>
                <div className="buttonSection">
                    <button>HTML</button>
                    <button>CSS</button>
                </div>
                <CSSCode />
                {/* <HTMLCode /> */}
            </StyledCodeContainer>
        );
    }
}

export default CodeContainer;

const StyledCodeContainer = styled.div`
    .buttonSection {
        display: flex;
        justify-content: space-around;
    }
    .buttonSection button {
        font-family: inherit;
        font-weight: bold;
        padding: 4px;
        width: 70px;
        border-radius: ${props => props.theme.borderRadius};
    }
`