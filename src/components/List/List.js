import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';
import ItemList from '../ItemsList/ItemsList';

const List = () => {
  return (
    <div>
      <ItemList />
    </div>
  );
};
List.propTypes = {};

List.defaultProps = {};

export default List;
