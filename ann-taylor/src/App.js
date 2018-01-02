import React, { Component } from 'react';

import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import CategoryHeader from './components/CategoryHeader';
import MainBanner from './components/MainBanner';
import BreadcrumbNav from './components/BreadcrumbNav';
import ProductListingPage from './components/ProductListingPage';
import LeftNavigation from './components/LeftNavigation';
import ProductListing from './components/ProductListing';

class App extends Component {

  render() {
    return (
      <div>
        <TopHeader />
        <MainHeader />
        <CategoryHeader />
        <MainBanner />
        <BreadcrumbNav />
        <ProductListingPage>
          <LeftNavigation />
          <ProductListing />
        </ProductListingPage>
      </div>
    );
  }
}

export default App;
