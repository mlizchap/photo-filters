import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import Slider from '../../Components/Slider';

class Filters extends Component {
    renderSlider = (context, key) => {
        return (
                <Slider 
                    width="80%"
                    value={context.state.presetInfo.filters[key].value}
                    title={context.state.presetInfo.filters[key].name}
                    min={context.state.presetInfo.filters[key].min}
                    max={context.state.presetInfo.filters[key].max}
                    step={context.state.presetInfo.filters[key].step}
                    handleChange={(e) => context.changeValue(e.target.value, context.state.presetInfo.filters[key].name)}
                />
        )

    }
    render() {
        return (
            <StyledFilterSection>
                <MyContext.Consumer>
                    {(context) => {
                        return (
                            <StyledFilterSection>
                                <div className="leftCol">
                                    {Object.keys(context.state.presetInfo.filters).map((key, index) => (index <= 3) ? this.renderSlider(context, key) : null)}
                                </div>
                                <div className="rightCol">
                                    {Object.keys(context.state.presetInfo.filters).map((key, index) => (index >= 4) ? this.renderSlider(context, key) : null)}
                                </div>
                            </StyledFilterSection>
                        )
                    }}
                </MyContext.Consumer>
            </StyledFilterSection>
        );
    }
}

export default Filters;

const StyledFilterSection = styled.div`
    text-align: center;
    display: flex;
    .leftCol {
        // background-color: lightgreen;
    }
    .rightCol {
        // background-color: red;
    }
`