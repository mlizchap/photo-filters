import React, { Component } from 'react';
import styled from 'styled-components';

class DropdownMenu extends Component {
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
    selectItem = (key) => {
        this.setState({ currentItem: key});
        this.props.handleSelectItem(key);
        this.toggleContent();
    }
    hoverItem = (key) => {
        this.props.handleSelectItem(key);
    }
    mouseLeaveItem = () => {
        this.props.handleSelectItem(this.state.currentItem);
        console.log(this.state.currentItem)
    }
    render() {
        return (
            <StyledDropdownMenu {...this.props}>
                <div onMouseLeave={() => this.setState({ showContent: false })}>
                    <button onClick={this.toggleContent}>
                        <span className="btnText">{this.props.currentItem || this.props.defaultDisplay }</span>
                        <span className="btnArrow">&#9660;</span>
                    </button>
                    <div 
                        className="content" 
                        style={{ display: (this.state.showContent) ?  "block" : "none" }}
                    >
                    {this.props.content.map(key => {
                        return (
                            <div 
                                className={(this.state.currentItem === key || !this.state.currentItem && this.props.defaultDisplay === key) ? "item selectedItem" : "item notSelectedItem"}
                                key={key}
                                onClick={() => this.selectItem(key)}
                                onMouseEnter={() => this.hoverItem(key)}
                                onMouseLeave={() => this.mouseLeaveItem()}
                            >
                                {key}
                            </div>

                        )
                    })}
                    </div>
                </div>
            </StyledDropdownMenu>
        )
    }
}

export default DropdownMenu;

const StyledDropdownMenu = styled.div`
    display: flex;
    justify-content: center;
    //width: 100%;
    .content {
        position: absolute;
        width: 150px;
        max-height: 150px;
        overflow-y: scroll;
        z-index: 2;
        font-family: ${props => props.theme.mainFont};
    }
    button {
        font-size: 9pt;
        width: 150px;
        padding: 3px;
        border: none;
        font-weight: bold;
        color: ${props => props.filters ? props.theme.filters.dark : props.tint ? props.theme.tints.dark : props.theme.presets.dark };
        background-color: ${props => props.filters ? props.theme.filters.main : props.tint ? props.theme.tints.main : props.theme.presets.main };
        font-family: ${props => props.theme.titleFont};
        // background-image: linear-gradient(-180deg, #ff1c68 0%, #9f0092 300px);
        border-radius: ${props => props.theme.borderRadius};
        letter-spacing: .1rem;

        &:hover {
            cursor: pointer;
            background-color:${props => props.filters ? props.theme.filters.hovered : props.tint ? props.theme.tints.hovered : props.theme.presets.hovered };

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
        padding: 5px;
        font-size: 9pt;
        color: ${props => props.theme.dark};
    }
    .selectedItem {
        background-color: #696c77;
        color: #bcbcbc;
    }
    .notSelectedItem {
        background-color:${props => props.filters ? props.theme.filters.light : props.tint ? props.theme.tints.light : props.theme.presets.light };
        &:hover {
            cursor: pointer;
            background-color:${props => props.filters ? props.theme.filters.highlighted : props.tint ? props.theme.tints.highlighted : props.theme.presets.highlighted};
            color:${props => props.filters ? props.theme.filters.light : props.tint ? props.theme.tints.light : props.theme.presets.light };
        }
    }
`