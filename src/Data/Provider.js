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
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                filters: { ...this.state.presetInfo.filters,
                    //[(name === "hueRotate" ? "hue-rotate" : name)]: {...this.state.presetInfo.filters[name], value: value }}}
                    [name]: {...this.state.presetInfo.filters[name], value: value }}}
        })
    }

    selectPreset = (selected) => {
        console.log(selected)
        this.setState({
            presetInfo: presetInfo[selected]
        })
    }

    render() {
        return (
            <MyContext.Provider 
                value={{
                    state: this.state,
                    changeValue: this.changeValue,
                    selectPreset: this.selectPreset
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;