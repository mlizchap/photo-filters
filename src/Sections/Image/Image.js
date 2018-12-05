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
                    const { presetInfo } = context.state;
                    const { background } = context.state.presetInfo;
                    return (
                        <StyledImage>
                            <div
                                className="bgColor"
                                style={{ 
                                    backgroundImage: `radial-gradient(blue 40%, orange 80%)`,
                                    //backgroundColor: (background.type === "solid") ? background.solid.color : "none" 
                                }}
                            >
                                <img 
                                    src={`${image}`} 
                                    style={{
                                            filter: this.getFilterValues(context),
                                            opacity: .5
                                            //opacity: (background.type === "solid") ? background.solid.opacity : "none"   
                                    }}
                                    width="200px" alt="to edit" 
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