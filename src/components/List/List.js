import React from 'react';
import ItemList from '../ItemsList/ItemsList';

const List = () => {
  return (
    <div className="d-flex" style={{ gap: '15px' }}>
      <ItemList />
    </div>
  );
};
List.propTypes = {};

List.defaultProps = {};

export default List;
