import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import { filters as defaultFilters } from '../../Data/filters';

class CSSCode extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
    renderBackground = (context) => {

    }
    render() {
        return (
            <StyledCSSCode>
                <MyContext.Consumer>
                    {context => {
                        const filterArr = Object.keys(context.state.presetInfo.filters);
                        
                        return (
                            <div>
                                .image &#123;
                                    <div className="prop">{this.renderFilters(filterArr, context)}</div>
                                &#125;
                                {this.renderBackground(context)}
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