import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import { presetInfo } from '../../Data/presets';
import styled from 'styled-components';

class Preset extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showContent: false
         };
    }
    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent})
    }
    selectItem = (key, context) => {
        context.selectPreset(key)
        this.toggleContent();
    }
    render() {
        return (
            
                <MyContext.Consumer>
                    {context => {
                        return (
                            <StyledPresetSection>
                                <div onMouseLeave={() => this.setState({ showContent: false })}>
                                    <button onClick={this.toggleContent}>{context.state.presetInfo.name}</button>
                                    <div 
                                        className="content" 
                                        style={{ display: (this.state.showContent) ?  "block" : "none" }}
                                    >
                                    {Object.keys(presetInfo).map(key => {
                                        return (
                                            <div 
                                                className="item"
                                                key={key}
                                                onClick={() => this.selectItem(key, context)}>
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
    // background-color: orange;
    width: 100%;
    .content {
        position: absolute;
        width: 150px;
    }
    button {
        width: 150px;
    }
    .item {
        background-color: blue;
        &:hover {
            background-color: lightblue;
        }
    }
`