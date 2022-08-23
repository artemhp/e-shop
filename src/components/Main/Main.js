import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
import SimpleImageSlider from 'react-simple-image-slider';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';
import ItemList from '../ItemsList/ItemsList';

const Main = () => {
  const { data, isLoading, isError } = useQuery('listMain', () => {
    return fetch('/.netlify/functions/api').then((response) => response.json().then((data) => data.list));
  });
  const images = [
    { url: 'images/slider/1.jpg' },
    { url: 'images/slider/2.jpg' },
    { url: 'images/slider/3.jpg' },
    { url: 'images/slider/4.jpg' },
  ];
  if (isLoading) {
    return '<div>Loading</div>';
  }
  if (isError) {
    return '<div>Error</div>';
  }

  return (
    <div className={styles.Main}>
      <div style={{ marginBottom: '15px', marginTop: '15px' }}>
        <SimpleImageSlider width={936} height={504} images={images} showBullets={true} showNavs={true} />
      </div>
      <div className="d-flex" style={{ gap: '15px' }}>
        <ItemList />
      </div>
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
