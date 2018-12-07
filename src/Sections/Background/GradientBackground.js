import React, { Component } from 'react';

import { MyContext } from '../../Data/Provider';
import ColorPicker from '../../Components/ColorPicker';
import BlendmodeSelect from '../../Components/BlendmodeSelect/BlendmodeSelect';

class GradientBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    const { inner, outer, blendMode } = context.state.presetInfo.background.gradient;
                    return (
                        <div>
                            [GRADIENT BACKGROUND]
                            <p>inner:</p>
                            <ColorPicker 
                                color={inner.color}
                                handleSelectColor={context.changeInnerGradientColor}
                            />
                            amount: <input 
                                value={inner.amount}
                                onChange={context.changeInnerGradientAmount}
                                type="range"
                            />{inner.amount}%

                            <p>outer:</p>
                            <ColorPicker 
                                color={outer.color}
                                handleSelectColor={context.changeOuterGradientColor}
                            />
                            amount: <input 
                                value={outer.amount}
                                onChange={context.changeOuterGradientAmount}
                                type="range"
                            />{outer.amount}%

                            <BlendmodeSelect display={blendMode} />
            
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default GradientBackground;

// const { inner: { color } } = context.state.presetInfo.background.gradient;
// console.log(inner, color)
// return (
//     <div>
//         [GRADIENT BACKGROUND]
//         <p>inner:</p>
//         <ColorPicker />
//         <input 
            
//             type="range" 
//         />
        
//         <p>outer:</p>
//         <ColorPicker />
//         <input 
//             type="range" 
//         />
        
//         <p>opacity</p>
//         <input 
//             type="range"
//         />

//     </div>
// );
// }