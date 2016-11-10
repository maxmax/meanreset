import React, { PropTypes }  from 'react';

import './jumbotron.less';

const propTypes = {
  items: PropTypes.array
};

const defaultProps = {
  items: [
    {
      id: 0,
      isDone: true,
      text: 'make components'
    }, {
      id: 1,
      isDone: false,
      text: 'design actions'
    }
  ]
};

class Jumbotron extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    //this._itemOnClick = this._itemOnClick.bind(this);
  }

  render() {

    const { items } = this.props;

    return (
      <div className='jumbotron'>
        <ul className='list-unstyled jumbotron__list'>
          {items.map( item => (
            <li key={ item.id } className='todo__item'>
              <span>{ item.id }</span>
              <span> - </span>
              <span>{ item.text }</span>
            </li>
          ) )}
        </ul>
      </div>
    );
  }
}

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
