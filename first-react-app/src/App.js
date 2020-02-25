/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';

import Header from './header.js';
import Counter from './counter.js';
import Footer from './footer.js';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter className='counter' />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
