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
    background-color: lightgreen;
    width: 100%;
    padding-bottom: 10px;
    .bgTypeButtons {
        display: flex;
        padding-top: 15px;
        padding-bottom: 15px;
        justify-content: space-around;
    }
    .typeSection {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`