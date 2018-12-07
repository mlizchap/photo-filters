import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';
import Slider from '../../Components/Slider';
class SolidBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledSolidBackground>
                <MyContext.Consumer>
                    {context => {
                        const { opacity, blendMode, color } = context.state.presetInfo.background.solid;
                        console.log(blendMode)
                        return (
                            <div className="solidDetails">
                                <div className="topRow">
                                    <div className="colorPicker">
                                        <ColorPicker 
                                            color={color}
                                            handleSelectColor={context.changeSolidBgColor}
                                        />
                                    </div>
                                    <Slider 
                                        width="70%"
                                        value={opacity}
                                        title="opacity:"
                                        min={0}
                                        max={1}
                                        step={.01}
                                        handleChange={context.changeSolidBgOpacity}
                                    />
                                </div>
                                <div className="bottomRow">
                                    <BlendmodeSelect display={blendMode}/>
                                </div>
                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </StyledSolidBackground>
        )
    }
}

export default SolidBackground;

const StyledSolidBackground = styled.div`
    padding-top: 10px;
    .solidDetails {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .topRow {
        display: flex;
        justify-content: space-around;
    }
    .bottomRow {
        display: flex;
        // justify-content: center;
        padding-top: 5px;
        padding-left: 15px;
    }
    .colorPicker {
        padding-top: 8px;
    }
`