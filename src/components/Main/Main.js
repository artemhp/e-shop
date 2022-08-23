import React from 'react';
import styles from './Main.module.css';
import SimpleImageSlider from 'react-simple-image-slider';
import ItemList from '../ItemsList/ItemsList';

const Main = () => {
  const images = [
    { url: 'images/slider/1.jpg' },
    { url: 'images/slider/2.jpg' },
    { url: 'images/slider/3.jpg' },
    { url: 'images/slider/4.jpg' },
  ];

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
