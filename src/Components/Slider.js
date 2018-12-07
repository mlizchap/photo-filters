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
                    <div className="value">{this.props.value}</div>
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
    font-size: 9pt;
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
        background-color: black;
        width: 23px;
        text-align: center;
        color: white;
        padding: 3px;
        border-radius: 2px;
    }
`