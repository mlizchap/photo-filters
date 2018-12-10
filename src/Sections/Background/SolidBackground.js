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
                <MyContext.Consumer>
                    {context => {
                        const { opacity, blendMode, color } = context.state.presetInfo.background.solid;
                        return (
                            <StyledSolidBackground isMobile={context.state.isMobileWidth}>
                                <div className="solidDetails">
                                    <div className="colorAndBlend">
                                        <div className="colorRow">
                                            <div className="text colorText">tint color:</div>
                                            <ColorPicker 
                                                color={color}
                                                handleSelectColor={context.changeSolidBgColor}
                                            />
                                        </div>
                                        <div className="row mixBlendRow">
                                            <div className="text mixBlendText">mix blend mode:</div>
                                            <DropdownMenu 
                                                tint
                                                content={blendModes} 
                                                defaultDisplay="normal"
                                                currentItem={context.state.presetInfo.background.solid.blendMode}
                                                handleSelectItem={(key) => {context.selectBlendMode(key)}}
                                            />
                                        </div>
                                        {/* <BlendmodeSelect display={blendMode}/> */}
                                    </div>
                                    <div className="slider">
                                        <Slider 
                                            small
                                            width="100%"
                                            value={opacity}
                                            title="solid opacity:"
                                            min={0}
                                            max={1}
                                            step={.01}
                                            handleChange={context.changeSolidBgOpacity}
                                        />
                                    </div>
                                </div>
                            </StyledSolidBackground>
                        )
                    }}

                </MyContext.Consumer>
        )
    }
}

export default SolidBackground;

const StyledSolidBackground = styled.div`
    // padding-bottom: 10px;
    padding-top: 15px;
    margin-right: 25px;
    margin-left: 25px;
    align-items: center;
    .solidDetails {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 145px;
        margin-right: auto;
        margin-left: auto;
        align-content: center;
        //width: ${props => props.isMobile ? '100%' : '80%'};
    }
    .colorAndBlend {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // flex-direction: ${props => props.isMobile ? `row` : `column`};

    }
    .colorRow {
        display: flex;
        flex-direction: ${props => props.isMobile ? 'column' : 'row'}; 
        padding-top:  ${props => props.isMobile ? '0px': '20px'};
        
    }
    .mixBlendRow {
        display: flex;
        flex-direction: column;
    }
    .text {
        font-family: ${props => props.theme.titleFont};
        font-weight: bold;
        font-size: ${props => props.isMobile ? '9pt' : '11pt'};
        margin-right: auto;
        margin-left: auto;
    }
    .colorText {
        margin-right: ${props => props.isMobile ? '0px': '10px'};
    }
    .mixBlendText {
        text-align: center;
    }
    .colorText {
        font-size: 11pt;
    }

    // .slider {
    //     margin-right: auto;
    //     margin-left: auto;
    //     display: flex;
    //     width: 100%;
    //     //width: ${props => props.isMobile ? '80%' : '100%'};
    //     // width: ${props => props.isMobile ? '100%' : '500px'};
        
    // }
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