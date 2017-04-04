import React from 'react';

const Grid = (props) => {
  let cells = props.values;

  return (
    <div>
      {cells}
    </div>
  )
}

module.exports = Grid;
