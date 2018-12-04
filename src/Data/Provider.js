import React, { Component } from 'react';
import { presetInfo } from './presets';

export const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presetName: "none",
            presetInfo: presetInfo.none
        }
    }

    changeValue = (value, name) => {
        console.log(value)
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                filters: { ...this.state.presetInfo.filters,
                    [name]: {...this.state.presetInfo.filters[name], value: value}}}
        }, () => console.log(this.state.presetInfo.filters.grayscale))
    }

    render() {
        return (
            <MyContext.Provider 
                value={{
                    state: this.state,
                    changeValue: this.changeValue
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;