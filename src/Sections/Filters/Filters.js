import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import Slider from '../../Components/Slider';

class Filters extends Component {
    render() {
        return (
            <StyledFilterSection>
                <MyContext.Consumer>
                    {(context) => {
                        const filters = context.state.presetInfo.filters
                        return (
                            <div>
                                {Object.keys(filters).map(key => {
                                    return (
                                        <div key={key}>
                                            {/* {filters[key].name}:
                                            <input 
                                                type="range"
                                                step={filters[key].step}
                                                min={filters[key].min}
                                                max={filters[key].max}
                                                onChange={(e) => context.changeValue(e.target.value, filters[key].name)}
                                                value={context.state.presetInfo.filters[key].value}
                                            />
                                            {filters[key].value} */}

                                            <Slider 
                                                width="80%"
                                                value={context.state.presetInfo.filters[key].value}
                                                title={filters[key].name}
                                                min={filters[key].min}
                                                max={filters[key].max}
                                                step={filters[key].step}
                                                handleChange={(e) => context.changeValue(e.target.value, filters[key].name)}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </StyledFilterSection>
        );
    }
}

export default Filters;

const StyledFilterSection = styled.div`
    background-color: purple;
    text-align: center;
    padding: 20px;
`