import React from 'react';

const Cell = (props) => {
  const className = props.value;
  return (
    <div
      className={className} id='cell'
    />
  )
}

module.exports = Cell;
