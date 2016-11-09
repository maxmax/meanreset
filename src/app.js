import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './todoview';
import { Jumbotron } from './jumbotron';
import Cards from './Cards/Cards';

const dummyTodos = [
  { id: 0, isDone: true, text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];

//class BaseWrapper extends React.Component {
export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <h2>Hello, {this.props.name}</h2>
        <section>
          <Cards url="/editor/comments" pollInterval={2000} />
          <Jumbotron items={dummyTodos} />
          <TodoList todos={dummyTodos} />
        </section>
      </section>
    );
  }
}

render(
  <BaseWrapper name="this src/app ui" />,
  document.getElementById( 'app' )
);
