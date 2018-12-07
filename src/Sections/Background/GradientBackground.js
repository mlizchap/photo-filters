import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';
import Slider from '../../Components/Slider';

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
                        <StyledGradientBackground>
                            <div className="colorSection">
                                <div className="description">
                                    <p>inner:</p>
                                </div>

                                <div className="colorPicker">
                                    <ColorPicker 
                                        color={inner.color}
                                        handleSelectColor={context.changeInnerGradientColor}
                                    />
                                </div>

                                <div className="slider">
                                    <Slider 
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
                                <div className="title">
                                    <p>outer:</p>
                                </div>
                                <div className="colorPicker">
                                    <ColorPicker 
                                        color={outer.color}
                                        handleSelectColor={context.changeOuterGradientColor}
                                    />
                                </div>
                                <div className="slider">
                                <Slider 
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
                                    <BlendmodeSelect display={blendMode} />
                                </div>
                                <div className="opacitySlider">
                                    <Slider 
                                        width="100%"
                                        value={opacity}
                                        title="opacity:"
                                        min={0}
                                        max={1}
                                        step={.01}
                                        handleChange={context.changeGradientOpacity}
                                    />
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
    // background-color: orange;
    p {
        font-size: 10pt;
    }
    .slider {
        flex-grow: 1;
    }
    .colorPicker {
        padding-top: 5px;
    }
    .colorSection {
        display: flex;
        justify-content: space-around;
    }
    .colorSection > div {
        padding-right: 20px;
        padding-left: 10px;
    }
    .bottomRow {
        display: flex;
        justify-content: space-around;
    }
    .blendMode {
        padding-right: 10px;
        padding-left: 20px;
        padding-top: 10px;
    }
    .opacitySlider {
        flex-grow: 1;
        padding-right: 20px;
        padding-left: 20px;
    }
`