import React, { Component } from 'react';
import CollapsableBox from '../../Components/CollapsableBox';
import CodeContainer from './CodeContainer';

class CollapsableCodeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <CollapsableBox
                code
                title="CODE"
                content={<CodeContainer />}
                {...this.props}
            />        
        );
    }
}

export default CollapsableCodeContainer;