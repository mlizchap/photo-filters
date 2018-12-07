import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';

const image = require('../../static/image1.jpg');

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
                                style={{ 
                                    backgroundImage: (background.type === "gradient") ? `radial-gradient(${background.gradient.inner.color} ${background.gradient.inner.amount}%, ${background.gradient.outer.color} ${background.gradient.outer.amount}%)` : "none",
                                    backgroundColor: (background.type === "solid") ? background.solid.color : "white" 
                                }}
                            >
                                <img 
                                    src={`${image}`} 
                                    style={{
                                            filter: this.getFilterValues(context),
                                            opacity: (background.type === "solid") ? 1 - background.solid.opacity : (background.type === "gradient") ? background.gradient.opacity : 1,   
                                            mixBlendMode:  (background.type === "solid") ? background.solid.blendMode : (background.type === "gradient") ? background.gradient.blendMode : "none"
                                    }}
                                    width="200px" 
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
    width: 200px;
`