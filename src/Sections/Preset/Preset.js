import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import { presetInfo } from '../../Data/presets';
import styled from 'styled-components';
import DropdownMenu from '../../Components/DropdownMenu';

class Preset extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentItem: "none",
            showContent: false,
            
         };
    }
    selectItem = (key, context) => {
        console.log(context.state.presetInfo)
        context.selectPreset(key);
    }

    render() {
        return (
                <MyContext.Consumer>
                    {context => {
                        return (
                            <StyledPresetSection>
                                <span className="presetTitle">PRESET:</span>
                                <div className="presetDropdown">
                                <DropdownMenu 
                                    small
                                    content={Object.keys(presetInfo)} 
                                    defaultDisplay="normal"
                                    currentItem={context.state.presetInfo.name.toUpperCase()}
                                    handleSelectItem={(key) => this.selectItem(key, context)}
                                />
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
    .presetTitle {
        font-size: 20pt;
        font-weight: bold;
        margin-right: 20px;
        font-family: ${props => props.theme.titleFont};
        color: ${props => props.theme.presets.main};
        letter-spacing: .1rem;
    }
    .presetDropdown {
        margin-top: 7px;
    }

`