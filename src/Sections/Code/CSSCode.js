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
        console.log(filtersToDisplay)
        
        if (filtersToDisplay.length > 0) {
            filtersToDisplay.forEach((filter,index) => {
                console.log(index, filtersToDisplay.length)
                if (filterObj[filter].value !== defaultFilters[filter].value) {
                    filterArr.push(
                        <span key={filter}>
                            <span className="fn">{filter}(</span>
                            <span className="value">{filterObj[filter].value}</span>
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
            </div> 
            : null

        // return <div />

        // let filterStr = "<div>"
        // filters.forEach(filter => {
        //     if (filterObj[filter].value !== defaultFilters[filter].value) {
        //         filterStr += `<span className="prop">${filter}</span>(${filterObj[filter].value}) `
        //     }
        // })
        // filterStr += "</div>"
        // const parsedHTML =  (filterStr.length > 11) ? parser.parseFromString(filterStr, 'text/html') : "XX";
        // //console.log((parsedHTML) ? parsedHTML.body.innerHTML : "X")
        // console.log(filterStr.length)
        // return (filterStr) ? <div><span className="selector">filters:</span> {(filterStr.length > 11) ? parsedHTML.body.innerHTML : `x`}</div> : null;
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
                                .tint &#123;
                                    <div className="prop">width: 300px;</div>
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
        color: ${props => props.theme.tints.main};
    }
    .prop {
        color: ${props => props.theme.code.main};
    }
    .fn {
        color: ${props => props.theme.filters.code};
    }

`