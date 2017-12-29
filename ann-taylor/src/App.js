import React, { Component } from 'react';

import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import CategoryHeader from './components/CategoryHeader';
import MainBanner from './components/MainBanner';

class App extends Component {

  componentDidMount = () => {}

  render() {
    return (
      <div>
        <TopHeader />
        <MainHeader />
        <CategoryHeader />
        <MainBanner />
      </div>
    );
  }
}

export default App;
