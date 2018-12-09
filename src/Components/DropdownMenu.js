import React, { Component } from 'react';
import styled from 'styled-components';

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentItem: "",

            showContent: false,
         };
    }
    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent})
    }
    selectItem = (key) => {
        this.props.handleSelectItem(key);
        this.setState({ currentItem: key});
        this.toggleContent();
    }
    // hoverItem = (key, context) => {
    //     context.selectPreset(key)
    // }
    // mouseLeaveItem = (context) => {
    //     context.selectPreset(this.state.currentItem);
    //     console.log(this.state.currentItem)
    // }
    render() {
        return (
            <StyledDropdownMenu>
                <div onMouseLeave={() => this.setState({ showContent: false })}>
                    <button onClick={this.toggleContent}>
                        <span className="btnText">{this.state.currentItem || this.props.defaultDisplay }</span>
                        <span className="btnArrow">&#9660;</span>
                    </button>
                    <div 
                        className="content" 
                        style={{ display: (this.state.showContent) ?  "block" : "none" }}
                    >
                    {this.props.content.map(key => {
                        return (
                            <div 
                                className="item"
                                key={key}
                                onClick={() => this.selectItem(key)}
                                // onMouseEnter={() => this.hoverItem(key, context)}
                                // onMouseLeave={() => this.mouseLeaveItem(context)}
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
    width: 100%;
    .content {
        position: absolute;
        width: 150px;
        font-family: ${props => props.theme.mainFont};
    }
    button {
        font-size: 9pt;
        width: 150px;
        padding: 3px;
        border: none;
        font-weight: bold;
        color: ${props => props.theme.filters.dark};
        background-color: ${props => props.theme.filters.main};
        font-family: ${props => props.theme.titleFont};
        // background-image: linear-gradient(-180deg, #ff1c68 0%, #9f0092 300px);
        border-radius: ${props => props.theme.borderRadius};
        letter-spacing: .1rem;

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.filters.hovered};

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
        background-color: ${props => props.theme.filters.light};
        padding: 5px;
        font-size: 9pt;
        color: ${props => props.theme.dark};
        &:hover {
            background-color: ${props => props.theme.filters.highlighted};
            color: ${props => props.theme.filters.light};
        }
    }
`