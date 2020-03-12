import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map(pokemon =>
      ['Light'].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
        >
          <Card.Header>{pokemon.name}</Card.Header>
          <Card.Body>
            <Card.Text>{pokemon.url}</Card.Text>
          </Card.Body>
        </Card>
      ))
    );
  }
}

export default PokemonList;
