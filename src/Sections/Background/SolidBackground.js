import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';
import Slider from '../../Components/Slider';
import DropdownMenu from '../../Components/DropdownMenu';
const {blendModes} = require('./blendModes');

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
                        return (
                            <div className="solidDetails">
                                <div className="row">
                                    <div className="text">tint color:</div>
                                    <ColorPicker 
                                        color={color}
                                        handleSelectColor={context.changeSolidBgColor}
                                    />
                                </div>
                                <div className="row">
                                    <div className="text">mix blend mode:</div>
                                    <DropdownMenu 
                                        small
                                        content={blendModes} 
                                        defaultDisplay="normal"
                                        handleSelectItem={(key) => {context.selectBlendMode(key)}}
                                    />
                                    {/* <BlendmodeSelect display={blendMode}/> */}
                                </div>
                                <Slider 
                                    large
                                    width="70%"
                                    value={opacity}
                                    title="opacity:"
                                    min={0}
                                    max={1}
                                    step={.01}
                                    handleChange={context.changeSolidBgOpacity}
                                />
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
    // padding-bottom: 10px;
    padding-top: 15px;
    align-items: center;
    .solidDetails {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 145px;
        width: 70%;
        margin-right: auto;
        margin-left: auto;
    }
    .row {
        display: flex;
    }
    .text {
        font-family: ${props => props.theme.titleFont};
        font-weight: bold;
        font-size: 12pt;
        margin-right: 15px;
    }
    // .topRow {
    //     display: flex;
    //     justify-content: space-around;
    //     padding-left: 10px;
    //     padding-right: 10px;
    // }
    // .bottomRow {
    //     display: flex;
    //     // justify-content: center;
    //     padding-top: 15px;
    //     padding-left: 20px;
    //     padding-bottom: 5px;
    // }
    //.colorPicker {
        // padding-top: 8px;
    //}
`