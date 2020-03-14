import React from 'react';
import { Card } from 'react-bootstrap';

const TypeList = props => {
  const content = props.types.map(type =>
    ['Light'].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
      >
        <Card.Header>{type.name}</Card.Header>
        <Card.Body>
          <Card.Text>{type.url}</Card.Text>
        </Card.Body>
      </Card>
    ))
  );
  return content;
};

export default TypeList;
