import React, { Component } from 'react';
import CollapsableBox from '../../Components/CollapsableBox';
import BackgroundContainer from './BackgroundContainer';

class CollapsableBackgroundContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props.theme)
        return (
            <CollapsableBox 
                tint={true}
                color={props => props.theme.tints.main}
                title="TINT"
                content={<BackgroundContainer />}    
                {...this.props}
            />
            
        );
    }
}

export default CollapsableBackgroundContainer;