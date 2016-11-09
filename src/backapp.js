import React from 'react';
import { render } from 'react-dom';
import Cards from './Cards/Cards';

export default class EditWrapper extends React.Component {
  render() {
    return (
      <section>
        <h2>Hello, {this.props.name}</h2>
        <section>
          <Cards url="/editor/comments" pollInterval={2000} edit="true" />
        </section>
      </section>
    );
  }
}

render(
  <EditWrapper name="this src/editor full" />,
  document.getElementById( 'app' )
);
