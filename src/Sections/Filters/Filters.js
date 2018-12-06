import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';

class Filters extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) => {
                    const filters = context.state.presetInfo.filters
                    return (
                        <div>
                            [FILTERS]
                            {Object.keys(filters).map(key => {
                                return (
                                    <div key={key}>
                                        {filters[key].name}:
                                        <input 
                                            type="range"
                                            step={filters[key].step}
                                            min={filters[key].min}
                                            max={filters[key].max}
                                            onChange={(e) => context.changeValue(e.target.value, filters[key].name)}
                                            value={context.state.presetInfo.filters[key].value}
                                        />
                                         {filters[key].value}
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </MyContext.Consumer>
        );
    }
}

export default Filters;

const FilterSectionStyle = styled.div`

`