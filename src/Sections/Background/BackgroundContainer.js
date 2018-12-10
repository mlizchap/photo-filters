import React, { Component } from 'react';
import { MyContext } from '../../Data/Provider';
import styled from 'styled-components';

import GradientBackground from './GradientBackground';
import SolidBackground from './SolidBackground';
import NoBackground from './NoBackground';

class BackgroundContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    changeBg = (e, context) => {
        context.changeBgType(e.target.innerHTML)
    }

    render() {
        return (
                <MyContext.Consumer>
                    {context => {
                        const { type } = context.state.presetInfo.background;
                        return (
                            <StyledBackgroundContainer isMobile={context.state.isMobileWidth}>
                                <div className="bgTypeButtons">
                                    <button 
                                        className={(type === "solid") ? "selected" : "notSelected"}
                                        onClick={(e) => this.changeBg(e, context)}
                                    >
                                            solid
                                    </button>
                                    <button 
                                        className={(type === "gradient") ? "selected" : "notSelected"}
                                        onClick={(e) => this.changeBg(e, context)}
                                    >
                                            gradient
                                    </button>
                                    <button 
                                        className={(type === "none") ? "selected" : "notSelected"}
                                        onClick={(e) => this.changeBg(e, context)}
                                    >
                                        none
                                    </button>
                                </div>
                                <div className="typeSection">
                                    {(type === "solid") ? <SolidBackground /> 
                                    : (type === "gradient") ? <GradientBackground /> 
                                        : <NoBackground /> }
                                </div>
                            </StyledBackgroundContainer>
                        )
                    }}
                </MyContext.Consumer>
        );
    }
}

export default BackgroundContainer;

const StyledBackgroundContainer = styled.div`
    height: 165px;
    margin: ${props => props.isMobile ? '0' : '0 30px'};
    color: ${props => props.theme.tints.main};
    letter-spacing: .1rem;
    padding-bottom: 15px;
    .bgTypeButtons {
        display: flex;
        justify-content: space-around;
    }
    .bgTypeButtons button {
        font-family: inherit;
        font-weight: bold;
        padding: 4px;
        width: 70px;
        border-radius: ${props => props.theme.borderRadius};
    }
    .selected {
        background-color: ${props => props.theme.highlight};
        border: 1px solid ${props => props.theme.tints.highlightDark};
        color: ${props => props.theme.tints.highlightDark};
    }
    .notSelected {
        background-color: ${props => props.theme.tints.light};
        border: 1px solid ${props => props.theme.tints.dark};
        color: ${props => props.theme.tints.dark};
        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.tints.hovered};
        }
    }
    .typeSection {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        backgrouond-color:
    }
`