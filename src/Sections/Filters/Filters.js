import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import Slider from '../../Components/Slider';
import DropdownMenu from '../../Components/DropdownMenu';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownSelect: "grayscale"
        }
    }
    renderSlider = (context, key) => {
        return (
                <Slider 
                    key={key}
                    width="80%"
                    value={context.state.presetInfo.filters[key].value}
                    unit={(key === "hue-rotate") ? <span>&deg;</span> : context.state.presetInfo.filters[key].unit}
                    title={context.state.presetInfo.filters[key].name}
                    min={context.state.presetInfo.filters[key].min}
                    max={context.state.presetInfo.filters[key].max}
                    step={context.state.presetInfo.filters[key].step}
                    handleChange={(e) => context.changeValue(e.target.value, context.state.presetInfo.filters[key].name, context.state.presetInfo.filters[key].max)}
                />
        )
    }
    dropdownSelectFilter = (selected) => {
        this.setState({ dropdownSelect: selected })
    }
    renderDesktopView = (context) => {
        return (
            <div className="desktopView">
                <div className="leftCol">
                    {Object.keys(context.state.presetInfo.filters).map((key, index) => (index <= 3) ? this.renderSlider(context, key) : null)}
                </div>
                <div className="rightCol">
                    {Object.keys(context.state.presetInfo.filters).map((key, index) => (index >= 4) ? this.renderSlider(context, key) : null)}
                </div>
            </div>
        )
    }

    renderMobileView = (context) => {
        const filterArr = Object.keys(context.state.presetInfo.filters);

        return (
            <div className="mobileView">
                <DropdownMenu 
                    filters
                    content={filterArr} 
                    handleSelectItem={this.dropdownSelectFilter}
                    defaultDisplay="grayscale"
                    currentItem={this.state.dropdownSelect}
                />
                <Slider 
                    width="80%"
                    value={context.state.presetInfo.filters[this.state.dropdownSelect].value}
                    unit={context.state.presetInfo.filters[this.state.dropdownSelect].unit}
                    title={context.state.presetInfo.filters[this.state.dropdownSelect].name}
                    min={context.state.presetInfo.filters[this.state.dropdownSelect].min}
                    max={context.state.presetInfo.filters[this.state.dropdownSelect].max}
                    step={context.state.presetInfo.filters[this.state.dropdownSelect].step}
                    handleChange={(e) => context.changeValue(e.target.value, context.state.presetInfo.filters[this.state.dropdownSelect].name)}
                />
            </div>
        )
    }
    render() {
        return (
            <StyledFilterSection>
                <MyContext.Consumer>
                    {(context) => {
                        return (
                            <StyledFilterSection isMobile={context.state.isMobileWidth}>
                                { (context.state.isMobileWidth) ? this.renderMobileView(context) : this.renderDesktopView(context) }
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
    .desktopView {
        text-align: center;
        display: flex;
    
    }
    .mobileView {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mobileView > div {
        margin-bottom: 10px;
    }
`