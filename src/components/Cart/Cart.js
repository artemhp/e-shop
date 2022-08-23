import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state);
  console.log(items);
  return <div className={styles.Cart}>Cart Component</div>;
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
