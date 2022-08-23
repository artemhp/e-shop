import React from 'react';
import { useQuery } from 'react-query';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  let navigate = useNavigate();
  const { data, isLoading, isError } = useQuery('listMain', () => {
    return fetch('/.netlify/functions/api').then((response) => response.json().then((data) => data.list));
  });
  if (isLoading) {
    return '<div>Loading</div>';
  }
  if (isError) {
    return '<div>Error</div>';
  }
  return data.map((item) => {
    return (
      <Card key={item.id} style={{ width: '18rem' }}>
        <Ratio aspectRatio="16x9">
          <Card.Img variant="top" src={item.image} />
        </Ratio>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description.slice(0, 50)}...</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate('/details/' + item.id);
            }}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    );
  });
};

ItemList.propTypes = {};

ItemList.defaultProps = {};

export default ItemList;
