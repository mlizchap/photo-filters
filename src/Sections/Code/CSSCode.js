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
        return (filterStr) ? filterStr : null;
        
    }
    render() {
        return (
            <StyledCSSCode>
                <MyContext.Consumer>
                    {context => {
                        const filterArr = Object.keys(context.state.presetInfo.filters);

                        return (
                            <div>
                                {this.renderFilters(filterArr, context)}
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
`