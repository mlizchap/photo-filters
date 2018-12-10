import React, { Component } from 'react';
import styled from 'styled-components';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledSlider {...this.props}>
                <div className="details">
                    <div className="title">{this.props.title}</div>
                    <div className="value">{this.props.value}{this.props.unit}</div>
                </div>
                <div className="slider">
                    <input 
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        type="range"
                    />
                </div>
            </StyledSlider>
        );
    }
}

export default Slider;

const baseStyle = () => {
    return (
        `input[type=range] {
            -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
            width: 100%; /* Specific width is required for Firefox. */
            background: transparent; /* Otherwise white in Chrome */
        }
        
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
        }
        
        input[type=range]:focus {
            outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
        }
        
        input[type=range]::-ms-track {
            width: 100%;
            cursor: pointer;
        
            /* Hides the slider so custom styles can be added */
            background: transparent; 
            border-color: transparent;
            color: transparent;
        }`
    )
}
const thumbStyle = (props) => {
    return (
        `-webkit-appearance: none;
        border: 1px solid #000000;
        height: 18px;
        width: 8px;
        border-radius: 3px;
        background: ${props.theme.tints.main};
        cursor: pointer;
        margin-top: -7px; 
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;`
    )
}

const trackStyle = (props) => {
    return (
        `width: 100%;
        height: 4.2px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: green;
        border-radius: 1.3px;
        border: 0.2px solid #010101;`
    )
}

const StyledSlider = styled.div`
    width: ${props => props.width};
    display: inline-block;
    font-family: ${props => props.theme.titleFont};
    // font-size: ${props => props.large ? `12pt` : '9pt' };
    font-size: ${props => props.large ? '12pt' : props.small ? '9pt' : props.fontSize};



    input {
        width: 100%;
    }
    .title {
        padding-top: 5pt;
    }
    .details {
        display: flex;
        justify-content: space-between;
    }
    .value {
        font-size: 8pt;
        font-family: monospace;
        background-color: #0f1014;
        margin-top: auto;
        margin-bottom: auto;
        padding: 3px;
        width: 32px;
        text-align: center;
        color: white;
    }

    // override slider appearances
    ${baseStyle()}

    // styling the thumb
    input[type=range]::-webkit-slider-thumb { ${props => thumbStyle(props)} }
    input[type=range]::-moz-range-thumb { ${props => thumbStyle(props)} }      
    input[type=range]::-ms-thumb { ${props => thumbStyle(props)} }

    //styling the track
    input[type=range]::-webkit-slider-runnable-track { ${props => trackStyle(props)} };
    input[type=range]::-moz-range-track { ${props => trackStyle(props)} };
    input[type=range]::-ms-track { ${props => trackStyle(props)} };
`
