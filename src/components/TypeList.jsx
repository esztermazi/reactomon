import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class TypeList extends Component {
  render() {
    return this.props.types.map(type =>
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
  }
}

export default TypeList;
