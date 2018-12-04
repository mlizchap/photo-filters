import React, { Component } from 'react';

import './App.css';
import {MyContext} from '../Data/Provider';

import Image from '../Sections/Image/Image';
import Filters from '../Sections/Filters/Filters';

class App extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          // console.log(Object.keys(context).map(i => console.log(context[i])))
          return (
            <div>
              <Image />
              <Filters />
            </div>
          )
        }}

      </MyContext.Consumer>
    );
  }
}

export default App;
