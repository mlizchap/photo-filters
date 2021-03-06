import React, { Component } from 'react';
import { presetInfo } from './presets';

export const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileWidth: true,
            presetName: "none",
            presetInfo: presetInfo.none
        }
    }

    updateDimensions = (windowSize) => {
        if (windowSize < 800) {
            this.setState({ isMobileWidth: true })
        } else {
            this.setState({ isMobileWidth: false })
        }
        
    }    
    componentDidMount = () => {
        window.addEventListener("resize", () => this.updateDimensions(window.innerWidth) );
    }
    componentWillMount = () => {
        this.updateDimensions(window.innerWidth);
    }
    round = (value, decimals) => {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    changeValue = (value, name, max) => {
        this.setState({ 
            presetInfo: { 
                ...this.state.presetInfo,
                filters: { ...this.state.presetInfo.filters,
                    [name]: {...this.state.presetInfo.filters[name], value: (max >= 100) ? this.round(value, 0) : (max <= 10 && max > 4) ? this.round(value, 1) : value }}}
        })
    }

    selectPreset = (selected) => {
        console.log(presetInfo[selected])
        this.setState({
            presetName: selected,
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