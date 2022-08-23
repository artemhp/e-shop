import React from 'react';
import PropTypes from 'prop-types';
import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Details = () => {
  let { id } = useParams();
  const { data, isLoading, isError } = useQuery('listMain', () => {
    return fetch('/.netlify/functions/api').then((response) =>
      response
        .json()
        .then((data) => data.list)
        .then((item) => {
          return item.find((el) => {
            return el.id == id;
          });
        }),
    );
  });
  if (isLoading) {
    return '<div>Loading</div>';
  }
  if (isError) {
    return '<div>Error</div>';
  }
  return (
    <div className={styles.Details}>
      <div className="row">
        <div className="col">
          <Image src={data.image} fluid />

          <div className="d-grid mt-2">
            <Button variant="outline-primary">Add to Cart</Button>
          </div>
        </div>
        <div className="col">
          <h1>{data.title}</h1>
          <div>{data.description}</div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
