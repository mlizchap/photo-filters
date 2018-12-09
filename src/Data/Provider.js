import React, { Component } from 'react';
import { presetInfo } from './presets';

export const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowSize: 600,
            presetName: "none",
            presetInfo: presetInfo.none
        }
    }

    updateDimensions = (windowSize) => {
        this.setState({ windowSize })
    }    
    componentDidMount = () => {
        window.addEventListener("resize", () => this.updateDimensions(window.innerWidth) );
    }
    componentWillMount = () => {
        this.updateDimensions(window.innerWidth);
    }

    changeValue = (value, name) => {
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                filters: { ...this.state.presetInfo.filters,
                    [name]: {...this.state.presetInfo.filters[name], value: value }}}
        })
    }

    selectPreset = (selected) => {
        this.setState({
            presetInfo: presetInfo[selected]
        })
    }

    changeSolidBgColor = (color) => {
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    solid: {...this.state.presetInfo.background.solid,
                        color: color
                    }
                }
            }
        })
    }

    changeSolidBgOpacity = (e) => {
        const opacity = e.target.value;
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    solid: { ...this.state.presetInfo.background.solid, opacity }
                }
            }
        })
    }

    changeInnerGradientAmount = (e) => {
        const amount = e.target.value
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    gradient: {...this.state.presetInfo.background.gradient,
                        inner: {...this.state.presetInfo.background.gradient.inner,
                            amount
                        }
                    }
                }
            }
        })
    }

    changeOuterGradientAmount = (e) => {
        const amount = e.target.value
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    gradient: {...this.state.presetInfo.background.gradient,
                        outer: {...this.state.presetInfo.background.gradient.outer,
                            amount
                        }
                    }
                }
            }
        })
    }

    changeInnerGradientColor = (color) => {
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    gradient: {...this.state.presetInfo.background.gradient,
                        inner: {...this.state.presetInfo.background.gradient.inner,
                            color
                        }
                    }
                }
            }
        })
    }

    changeOuterGradientColor = (color) => {
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    gradient: {...this.state.presetInfo.background.gradient,
                        outer: {...this.state.presetInfo.background.gradient.outer,
                            color
                        }
                    }
                }
            }
        })
    }

    selectBlendMode = (blendMode) => {
        if (this.state.presetInfo.background.type === "solid") {
            this.setState({ 
                presetInfo: { 
                    ...this.state.presetInfo,
                    background: {...this.state.presetInfo.background,
                        solid: { ...this.state.presetInfo.background.solid, blendMode }
                    }
                }
            })
        } else {
            this.setState({ 
                presetInfo: { 
                    ...this.state.presetInfo,
                    background: {...this.state.presetInfo.background,
                        gradient: {...this.state.presetInfo.background.gradient,
                            blendMode
                        }
                    }
                }
            })
        }
    }

    changeBgType = (type) => {
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    type
                }
            }
        })
    }

    changeGradientOpacity = (e) => {
        const opacity = e.target.value;
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                background: {...this.state.presetInfo.background,
                    gradient: {...this.state.presetInfo.background.gradient,
                        opacity
                    }
                }
            }
        })
    }

    changeBackToCurrentPreset = (current) => {
        this.setState({ presetInfo: presetInfo[current] })
    }

    render() {
        return (
            <MyContext.Provider 
                value={{
                    state: this.state,
                    changeValue: this.changeValue, // changes filter value
                    selectPreset: this.selectPreset,
                    changeSolidBgColor: this.changeSolidBgColor,
                    changeSolidBgOpacity: this.changeSolidBgOpacity,
                    changeInnerGradientAmount: this.changeInnerGradientAmount,
                    changeOuterGradientAmount: this.changeOuterGradientAmount,
                    changeInnerGradientColor: this.changeInnerGradientColor, 
                    changeOuterGradientColor: this.changeOuterGradientColor,
                    changeGradientOpacity: this.changeGradientOpacity,
                    selectBlendMode: this.selectBlendMode,
                    changeBgType: this.changeBgType,
                    changeBackToCurrentPreset: this.changeBackToCurrentPreset
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;