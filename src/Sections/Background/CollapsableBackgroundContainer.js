import React, { Component } from 'react';
import CollapsableBox from '../../Components/CollapsableBox';
import BackgroundContainer from './BackgroundContainer';

class CollapsableBackgroundContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <CollapsableBox 
                title="TINT"
                content={<BackgroundContainer />}    
            />
            
        );
    }
}

export default CollapsableBackgroundContainer;