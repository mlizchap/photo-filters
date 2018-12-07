import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
const {blendModes} = require('./blendmodes');

class BlendmodeSelect extends Component {
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
        context.selectBlendMode(key)
        this.toggleContent();
    }
    render() {
        return (
            <StyledBlendModeSelect>
                <MyContext.Consumer>
                    {context => {
                        return (
                            <div onMouseLeave={() => this.setState({ showContent: false })}>
                            <button onClick={this.toggleContent}>{this.props.display}</button>
                            <div 
                                className="content" 
                                style={{ display: (this.state.showContent) ?  "block" : "none" }}
                            >
                            {blendModes.map(key => {
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
                        )
                    }}
                </MyContext.Consumer>
            </StyledBlendModeSelect>
        );
    }
}

export default BlendmodeSelect;

const StyledBlendModeSelect = styled.div`
    width: 100px;
    button {
        width: 100px;
    }
    .content {
        position: absolute;
    }
    .item {
        background-color: blue;
        &:hover {
            background-color: lightblue;
        }
    }
`