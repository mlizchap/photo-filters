import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';

class SolidBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    const { opacity, blendMode, color } = context.state.presetInfo.background.solid;
                    console.log(blendMode)
                    return (
                        <div>
                            [SOLID BACKGROUND]
                            <ColorPicker 
                                color={color}
                                handleSelectColor={context.changeSolidBgColor}
                            />
                            
                            opacity: 
                            <input 
                                type="range"
                                value={opacity}
                                min={0}
                                max={1}
                                step={.01}
                                onChange={context.changeSolidBgOpacity}
                            />{opacity}
                            <BlendmodeSelect display={blendMode}/>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}


export default SolidBackground;