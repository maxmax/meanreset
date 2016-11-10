import React from 'react';
import { render } from 'react-dom';
import Jumbotron from './Jumbotron/Jumbotron';
import Cards from './Cards/Cards';
import AsideTabs from './AsideTabs/AsideTabs';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <h2>Hello, {this.props.name}</h2>
        <section>
          <Cards url="/editor/comments" pollInterval={2000} />
          <Jumbotron />
          <AsideTabs />
        </section>
      </section>
    );
  }
}

render(
  <BaseWrapper name="this src/app ui" />,
  document.getElementById( 'app' )
);
