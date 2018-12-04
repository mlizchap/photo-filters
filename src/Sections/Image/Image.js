import React, { Component } from 'react';

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
        console.log(filterString.trim())
        return filterString.trim();
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    return <img src={`${image}`} style={{ filter: this.getFilterValues(context) }}width="200px"/>
                }}
            </MyContext.Consumer>
        );
    }
}

export default Image;