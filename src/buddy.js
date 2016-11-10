import React from 'react';
import { render } from 'react-dom';
import Jumbotron from './Jumbotron/Jumbotron';
import Cards from './Cards/Cards';
import AsideTabs from './AsideTabs/AsideTabs';

//import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <section>
          <AsideTabs />
        </section>
      </section>
    );
  }
}

render(
  <BaseWrapper name="This src/buddy ui" />,
  document.getElementById( 'app' )
);
