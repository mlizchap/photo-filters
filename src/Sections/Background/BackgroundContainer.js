import React, { Component } from 'react';
import { MyContext } from '../../Data/Provider';
import GradientBackground from './GradientBackground';
import SolidBackground from './SolidBackground';

class BackgroundContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    changeBg = (e, context) => {
        context.changeBgType(e.target.innerHTML)
    }

    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    const { type } = context.state.presetInfo.background;
                    return (
                        <div>
                            <div className="bgTypeButtons">
                                <button 
                                    onClick={(e) => this.changeBg(e, context)}
                                >
                                        solid
                                </button>
                                <button 
                                    onClick={(e) => this.changeBg(e, context)}
                                >
                                        gradient
                                </button>
                                <button 
                                    onClick={(e) => this.changeBg(e, context)}
                                >
                                    none
                                </button>
                            </div>
                            {(type === "solid") ? <SolidBackground /> : (type === "gradient") ? <GradientBackground /> : null }

                        </div>
                    )
                }}
            </MyContext.Consumer>
        );
    }
}

export default BackgroundContainer;