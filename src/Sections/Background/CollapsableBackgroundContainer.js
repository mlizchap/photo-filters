import React, { Component } from 'react';
import CollapsableBox from '../../Components/CollapsableBox';
import BackgroundContainer from './BackgroundContainer';

class CollapsableBackgroundContainer extends Component {
    render() {
        return (
            <CollapsableBox 
                tint
                // color={props => props.theme.tints.main}
                title="TINT"
                content={<BackgroundContainer />}    
                {...this.props}
            />
            
        );
    }
}

export default CollapsableBackgroundContainer;