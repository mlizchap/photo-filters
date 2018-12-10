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

const StyledSlider = styled.div`
    width: ${props => props.width};
    display: inline-block;
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.large ? `12pt` : '9pt' };
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
    // .value {
    //     font-size: 8pt;
    //     background-color: black;
    //     width: 23px;
    //     text-align: center;
    //     color: white;
    //     margin-bottom: 10px;
    //     padding-top: 5px;
    //     border-radius: 2px;
    // }
`