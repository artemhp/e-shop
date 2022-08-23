import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import _ from 'lodash';

const Cart = () => {
  const items = useSelector((state) => {
    const groupItems = _.groupBy(state.cart, 'title');
    const newList = Object.keys(groupItems).map((key) => {
      return {
        title: key,
        description: groupItems[key][0].description,
        count: groupItems[key].length,
        price: groupItems[key][0].price * groupItems[key].length,
      };
    });
    return newList;
  });
  return (
    <ListGroup className="mt-2">
      {items.map((el) => {
        return (
          <ListGroup.Item>
            {el.title}{' '}
            <Badge bg="primary" pill>
              {el.count}
            </Badge>
            <div>
              <small>{el.description}</small>
            </div>
            <div>Price: {el.price}$</div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
