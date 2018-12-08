import React, { Component } from 'react';
import { MyContext } from '../../Data/Provider';
import styled from 'styled-components';

import GradientBackground from './GradientBackground';
import SolidBackground from './SolidBackground';

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
            <StyledBackgroundContainer>
                <MyContext.Consumer>
                    {context => {
                        const { type } = context.state.presetInfo.background;
                        return (
                            <div>
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
                                {(type === "solid") ? <SolidBackground /> : (type === "gradient") ? <GradientBackground /> : null }
                                </div>
                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </StyledBackgroundContainer>
        );
    }
}

export default BackgroundContainer;

const StyledBackgroundContainer = styled.div`
    // background-color: lightgreen;
    width: 100%;
    // padding-bottom: 10px;
    .bgTypeButtons {
        display: flex;
        // padding-top: 15px;
        // padding-bottom: 15px;
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
        // padding-top: 15px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        backgrouond-color:
    }
`