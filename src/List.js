import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item) => <li>{this.props.item}</li>)
    }
  </ul>
);

export default List;
