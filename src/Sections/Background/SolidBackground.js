import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker/ColorPicker';

class SolidBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {/* {console.log(context.state.presetInfo.background.solid)} */}
                {context => {
                    const { color } = context.state.presetInfo.background.solid;
                    console.log(color)
                    return (
                        <div>
                            [SOLID BACKGROUND]
                            <ColorPicker 
                                //color="orange"
                                handleSelectColor={(color) => context.changeSolidBgColor(color)}
                            />
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}


export default SolidBackground;