import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';
import Slider from '../../Components/Slider';
import DropdownMenu from '../../Components/DropdownMenu';


const {blendModes} = require('./blendModes');

class GradientBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    const { inner, outer, blendMode, opacity} = context.state.presetInfo.background.gradient;
                    return (
                        <StyledGradientBackground isMobile={context.state.isMobileWidth}>
                            <div className="colorSection">
                               
                                    { !context.state.isMobileWidth ?  <div className="description"><span>outer <br />color:</span></div> : null }
                                

                                <div className="colorPicker">
                                    <ColorPicker 
                                        color={inner.color}
                                        handleSelectColor={context.changeInnerGradientColor}
                                    />
                                </div>

                                <div className="slider">
                                    <Slider 
                                            small
                                            width="100%"
                                            value={Math.round(inner.amount)}
                                            title="amount:"
                                            min={0}
                                            max={100}
                                            step={.01}
                                            handleChange={context.changeInnerGradientAmount}
                                        />
                                </div>
                            </div>
                            
                            <div className="colorSection">
                            { !context.state.isMobileWidth ?  <div className="description"><span>inner <br />color:</span></div> : null }

                                <div className="colorPicker">
                                    <ColorPicker 
                                        color={outer.color}
                                        handleSelectColor={context.changeOuterGradientColor}
                                    />
                                </div>
                                <div className="slider">
                                <Slider 
                                    small
                                    width="100%"
                                    value={`${Math.round(outer.amount)}`}
                                    title="amount:"
                                    min={0}
                                    max={100}
                                    step={.01}
                                    handleChange={context.changeOuterGradientAmount}
                                />
                                </div>
                            </div>

                            <div className="bottomRow">
                                <div className="blendMode">
                                    {/* <BlendmodeSelect display={blendMode} /> */}
                                    <DropdownMenu 
                                        content={blendModes} 
                                        defaultDisplay="normal"
                                        currentItem={context.state.presetInfo.background.gradient.blendMode}
                                        handleSelectItem={(key) => {context.selectBlendMode(key)}}
                                        tint
                                    />
                                </div>
                                <div className="opacitySlider">
                                    {/* <Slider 
                                        width="100%"
                                        fontSize='11pt'
                                        value={opacity}
                                        title="gradient opacity:"
                                        min={0}
                                        max={1}
                                        step={.01}
                                        handleChange={context.changeGradientOpacity}
                                    /> */}
                                </div>
                            </div>
                        </StyledGradientBackground>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default GradientBackground;

const StyledGradientBackground = styled.div`
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // background-color: orange;
    padding: 5px;
    padding-bottom: 0px;
    p {
        font-size: 11pt;
    }
    .slider {
        flex-grow: 1;
    }
    .colorPicker {
        padding-top: 13px;;
    }
    .colorSection {
        display: flex;        
    }
    
    .colorSection > div, .bottomRow > div {
        padding-right: 10px;
        padding-left: 10px;
    }
    .bottomRow {
        display: flex;
        justify-content: space-around;
    }
    .blendMode {
        padding-top: 10px;
    }
    .opacitySlider {
        flex-grow: 1;
    }
    .description {
        font-size: 10pt;
        margin-top: 9px;
        // background: red;
    }
`