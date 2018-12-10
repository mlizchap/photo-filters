import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import { filters as defaultFilters } from '../../Data/filters';

class CSSCode extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    round = (value, decimals) => {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    renderFilterProp = (name) => {
        return <span className="prop">{name}</span>
    }
    renderFilters = (filters, context) => {
        let filterObj = context.state.presetInfo.filters;
        let filterArr = [];
        const filtersToDisplay = filters.filter(item => filterObj[item].value !== defaultFilters[item].value);
        
        if (filtersToDisplay.length > 0) {
            filtersToDisplay.forEach((filter,index) => {
                if (filterObj[filter].value !== defaultFilters[filter].value) {
                    filterArr.push(
                        <span key={filter}>
                            <span className="fn">{filter}(</span>
                            <span className="value">{filterObj[filter].value}{filterObj[filter].unit}</span>
                            <span className="fn">){( (filtersToDisplay.length - 1) === index) ? ";" : " "}</span>
                        </span>
                    )
                }
            })
        }

        return (filterArr.length > 0) ? 
            <div className="indented">
                <span className="prop">filter</span>
                :&nbsp;{filterArr.flat()}
            </div> : null
    }
    renderBackgroundOpacity = (opacity) => {
        const imageOpacity = 1 - opacity;
        return (Number(opacity) !== 0) ?  
            <div className="indented">
                <span className="prop">opacity: </span>
                <span className="value">{this.round(imageOpacity, 2)}</span>;
            </div> : null
    }
    renderMixBlend = (mixBlendMode) => {
        return (mixBlendMode !== "normal") ? 
            <div className="indented">
                <span className="prop">mix-blend-mode:&nbsp;</span> 
                <span className="value">{mixBlendMode};</span> 
            </div>: null
    }
    renderGradientBackground = (inner, outer) => {
        return (
            <div className="indented">
                <span className="prop">background-image:</span> 
                <span className="fn">&nbsp;radial-gradient(</span>
                    <span className="value">{inner.color} {Math.round(inner.amount)}%</span>,&nbsp;
                    <span className="value">{outer.color} {Math.round(outer.amount)}%</span>
                <span className="fn">)</span>;
            </div>
        )
    }
    renderSolidBackground = (color) => {
        return (
            <div className="indented">
                 <span className="prop">background-color</span>:
                 <span className="value">{color}</span>;
            </div>
        )        
    }
    render() {
        return (
            <StyledCSSCode>
                <MyContext.Consumer>
                    {context => {
                        const currentType = context.state.presetInfo.background.type
                        const filterArr = Object.keys(context.state.presetInfo.filters);
                        const {solid,gradient} = context.state.presetInfo.background;
                        return (
                            <div>
                                <span className="selector">.image</span> &#123;
                                    <div className="indented">
                                        <span className="prop">width</span>:
                                        <span className="value">&nbsp;300px</span>;
                                    </div>
                                    {this.renderFilters(filterArr, context)}
                                    {(currentType === "solid")  ? this.renderBackgroundOpacity(solid.opacity)
                                        : (currentType === "gradient") ?  this.renderBackgroundOpacity(gradient.opacity) 
                                        : null 
                                    }
                                    {(currentType === "solid")  ? this.renderMixBlend(solid.blendMode)
                                        : (currentType === "gradient") ?  this.renderMixBlend(gradient.blendMode) 
                                        : null 
                                    }
                                &#125;

                                <div>
                                <span className="selector">.tint&nbsp;</span>&#123;
                                    <div className="indented">
                                        <span className="prop">width</span>:
                                        <span className="value">&nbsp;300px</span>;
                                    </div>
                                    { (currentType === "gradient") ? this.renderGradientBackground(gradient.inner, gradient.outer) : null } 
                                    { (currentType === "solid") ? this.renderSolidBackground(solid.color) : null }
                                &#125;
                                </div>

                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </StyledCSSCode>
        );
    }
}

export default CSSCode;

const StyledCSSCode = styled.div`
    padding: 20px;
    font-family: monospace;
    font-size: 9pt;
    height: 125px;
    font-size: 8pt;
    background-color: ${props => props.theme.containerBg};
    margin: 10px 20px;
    border-radius: ${props => props.theme.borderRadius};
    overflow-y: scroll;
    white-space: nowrap;
    .indented {
        padding-left: 20px;
    }
    .selector {
        color: ${props => props.theme.presets.main};
    }
    .value {
        color: ${props => props.theme.highlight_dull};
        
    }
    .prop {
        color: ${props => props.theme.code.light};
    }
    .fn {
        color: ${props => props.theme.tints.main};
    }

`