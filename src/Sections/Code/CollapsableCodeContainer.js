import React, { Component } from 'react';
import styled from 'styled-components';

import { MyContext } from '../../Data/Provider';
import CollapsableBox from '../../Components/CollapsableBox';
import CodeContainer from './CodeContainer';

class CollapsableCodeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <MyContext.Consumer>
                {context => {
                    console.log(context.state.mobileView)
                    return (
                        <div>
                            <StyledCodeSection mobile={context.state.isMobileWidth}>
                                <CollapsableBox
                                    code
                                    title="CODE"
                                    content={<CodeContainer />}
                                    {...this.props}
                                />        
                            </StyledCodeSection>
                        </div>
                    )
                }}
            </MyContext.Consumer>

        );
    }
}

export default CollapsableCodeContainer;

const StyledCodeSection = styled.div`
    width: ${props => props.mobile ? `100%` : `100%` };
    margin-right: auto; 
    margin-left: auto;
`