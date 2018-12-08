import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import { presetInfo } from '../../Data/presets';
import styled from 'styled-components';

class Preset extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentItem: "none",
            showContent: false,
            
         };
    }
    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent})
    }
    selectItem = (key, context) => {
        context.selectPreset(key);
        this.setState({ currentItem: key});
        this.toggleContent();
    }
    hoverItem = (key, context) => {
        context.selectPreset(key)
    }
    mouseLeaveItem = (context) => {
        context.selectPreset(this.state.currentItem);
        console.log(this.state.currentItem)
    }
    render() {
        return (
            
                <MyContext.Consumer>
                    {context => {
                        return (
                            <StyledPresetSection>
                                <div onMouseLeave={() => this.setState({ showContent: false })}>
                                    <button onClick={this.toggleContent}>
                                        <span className="btnText">{context.state.presetInfo.name.toUpperCase()}</span>
                                        <span className="btnArrow">&#9660;</span>
                                    </button>
                                    <div 
                                        className="content" 
                                        style={{ display: (this.state.showContent) ?  "block" : "none" }}
                                    >
                                    {Object.keys(presetInfo).map(key => {
                                        return (
                                            <div 
                                                className="item"
                                                key={key}
                                                onClick={() => this.selectItem(key, context)}
                                                onMouseEnter={() => this.hoverItem(key, context)}
                                                onMouseLeave={() => this.mouseLeaveItem(context)}
                                            >
                                                {key}
                                            </div>

                                        )
                                    })}
                                    </div>
                                </div>
                            </StyledPresetSection>
                        )
                    }}
                </MyContext.Consumer>
        );
    }
}

export default Preset;

const StyledPresetSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    .content {
        position: absolute;
        width: 150px;
        font-family: ${props => props.theme.mainFont};
    }
    button {
        width: 150px;
        padding: 3px;
        border: none;
        font-size: 12pt;
        font-weight: bold;
        color: ${props => props.theme.presets.dark};
        background-color: ${props => props.theme.presets.main};
        font-family: ${props => props.theme.titleFont};
        // background-image: linear-gradient(-180deg, #ff1c68 0%, #9f0092 300px);
        border-radius: ${props => props.theme.borderRadius};
        font-size: 10pt;
        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.presets.hovered};

        }
    }
    .btnText {
        padding-left: 22px;
    }
    .btnArrow {
        padding-right: 5px;
        float: right;
    }
    .item {
        background-color: ${props => props.theme.presets.light};
        padding: 5px;
        font-size: 9pt;
        color: ${props => props.theme.dark};
        &:hover {
            background-color: ${props => props.theme.presets.highlighted};
            color: ${props => props.theme.presets.light};
        }
    }
`