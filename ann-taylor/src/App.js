import React, { Component } from 'react';

import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import CategoryHeader from './components/CategoryHeader';
import MainBanner from './components/MainBanner';
import BannerVideo from './components/BannerVideo';
import BreadcrumbNav from './components/BreadcrumbNav';
import ProductListingPage from './components/ProductListingPage';
import LeftNavigation from './components/LeftNavigation';
import ProductListing from './components/ProductListing';
import AddImageBlock from './components/AddImageBlock';

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
          <AddImageBlock />
        </ProductListingPage>
      </div>
    );
  }
}

export default App;
