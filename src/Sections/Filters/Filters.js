import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import { filters } from '../../Data/filters';

class Filters extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MyContext.Consumer>
                {/* {context => {console.log(context.currentPreset)} */}
                {(context) => {
                    const filters = context.state.presetInfo.filters
                    
                    return (
                        <div>
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