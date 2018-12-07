import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';

class GradientBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    const { inner, outer, blendMode } = context.state.presetInfo.background.gradient;
                    return (
                        <StyledGradientBackground>
                            [GRADIENT BACKGROUND]
                            <p>inner:</p>
                            <ColorPicker 
                                color={inner.color}
                                handleSelectColor={context.changeInnerGradientColor}
                            />
                            <input 
                                value={inner.amount}
                                onChange={context.changeInnerGradientAmount}
                                type="range"
                            />{inner.amount}%

                            <p>outer:</p>
                            <ColorPicker 
                                color={outer.color}
                                handleSelectColor={context.changeOuterGradientColor}
                            />
                            <input 
                                value={outer.amount}
                                onChange={context.changeOuterGradientAmount}
                                type="range"
                            />{outer.amount}%

                            <BlendmodeSelect display={blendMode} />
            
                        </StyledGradientBackground>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default GradientBackground;

const StyledGradientBackground = styled.div`
    background-color: orange;
`