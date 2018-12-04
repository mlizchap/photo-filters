import React, { Component } from 'react';

const image = require('../../static/image1.jpg');

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <img src={`${image}`} width="200px"/>
            </div>
        );
    }
}

export default Image;