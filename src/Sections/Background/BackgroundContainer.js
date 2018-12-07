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
                                        onClick={(e) => this.changeBg(e, context)}
                                    >
                                            solid
                                    </button>
                                    <button 
                                        onClick={(e) => this.changeBg(e, context)}
                                    >
                                            gradient
                                    </button>
                                    <button 
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
    background-color: lightblue;
    width: 100%;
    .bgTypeButtons {
        display: flex;
        padding-top: ${props => props.theme.subsectionBgPadding};
        justify-content: space-around;
    }
    .typeSection {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`