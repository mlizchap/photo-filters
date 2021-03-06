import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';

const image = require('../../static/pup.jpg');

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    getFilterValues = (context) => {
        const { filters } = context.state.presetInfo;
        let filterString = ""
        Object.keys(filters).forEach(key => filterString += `${key}(${filters[key].value}${filters[key].unit}) `)        
        return filterString.trim();
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    const { background } = context.state.presetInfo;
                    return (
                        <StyledImage>
                            <div
                                className="tint"
                                style={{ 
                                    width: (context.state.isMobileWidth) ? '300px' : '100%',
                                    backgroundImage: (background.type === "gradient") ? `radial-gradient(${background.gradient.inner.color} ${background.gradient.inner.amount}%, ${background.gradient.outer.color} ${background.gradient.outer.amount}%)` : "none",
                                    backgroundColor: (background.type === "solid") ? background.solid.color : "white" 
                                }}
                            ><img 
                                    src={image}
                                    width="100%"
                                    // src="https://picturepan2.github.io/instagram.css/assets/img/instagram.jpg"
                                    //width="200px"

                                    style={{
                                            filter: this.getFilterValues(context),
                                            opacity: (background.type === "solid") ? 1 - background.solid.opacity : (background.type === "gradient") ? 1 - background.gradient.opacity : 1,   
                                            mixBlendMode:  (background.type === "solid") ? background.solid.blendMode : (background.type === "gradient") ? background.gradient.blendMode : "none"
                                    }}
                                    //width={(context.state.isMobileWidth) ? '30%' : '100%'}
                                    alt="to edit" 
                                />
                            </div>
                        </StyledImage>
                    );
                }}
            </MyContext.Consumer>
        );
    }
}

export default Image;

const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    .tint {
        //padding-bottom: -13px;
        line-height: 0;
    }
`