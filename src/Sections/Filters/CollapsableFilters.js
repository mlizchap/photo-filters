import React, { Component } from 'react';
import CollapsableBox from '../../Components/CollapsableBox';
import Filters from './Filters';

class CollapsableFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <CollapsableBox 
                content={<Filters />}
                title="FILTERS"
            />
        );
    }
}

export default CollapsableFilters;