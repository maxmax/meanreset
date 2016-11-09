import React from 'react';

export function Jumbotron( props )
{
  const { items } = props;

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
