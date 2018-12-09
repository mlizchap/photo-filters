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
    renderFilters = (filters, context) => {
        let filterObj = context.state.presetInfo.filters;
        let filterStr = ""
        filters.forEach(filter => {
            if (filterObj[filter].value !== defaultFilters[filter].value) {
                filterStr += `${filter}(${filterObj[filter].value}) `
            }
            
        })
        return (filterStr) ? `filters: ${filterStr.trim()};` : null;
    }
    renderBackgroundOpacity = (opacity) => {
        const imageOpacity = 1 - opacity;
        return (Number(opacity) !== 1) ?  <div className="prop">opacity: {this.round(imageOpacity, 2)};</div> : null
    }
    renderMixBlend = (mixBlendMode) => {
        return (mixBlendMode !== "normal") ? <div className="prop">mix-blend-mode: {mixBlendMode};</div> : null
    }
    renderGradientBackground = (inner, outer) => {
        console.log(inner, outer)
        return <div className="prop">background-image: radial-gradient({inner.color} {Math.round(inner.amount)}%, {outer.color} {Math.round(outer.amount)}%);</div>
    }
    renderSolidBackground = (color) => {
        return <div className="prop">background-color: {color};</div>
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
                                .image &#123;
                                    <div className="prop">{this.renderFilters(filterArr, context)}</div>
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
                                .tint &#123;
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
    .prop {
        padding-left: 20px;
        color: ${props => props.theme.tints.light};
    }
`