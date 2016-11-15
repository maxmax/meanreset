import React from 'react';
import { render } from 'react-dom';
import Jumbotron from './components/Jumbotron/Jumbotron';
import LandingBase from './components/LandingBase/LandingBase';
import Cards from './components/Cards/Cards';
import AsideTabs from './components/AsideTabs/AsideTabs';
import StickyFooter from './components/StickyFooter/StickyFooter';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <LandingBase />
        <Cards url="/editor/comments" pollInterval={2000} />
        <Jumbotron />
        <AsideTabs />
        <StickyFooter />
      </section>
    );
  }
}

render(
  <BaseWrapper />,
  document.getElementById( 'app' )
);
