import React, { Component } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/PokemonCard.css';
import CardBack from '../resources/cardback.png';
import Gotta from '../resources/gotta.png';

class PokemonCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CardBack} />
        <Card.Body>
          <Card.Title>
            {this.props.pokemon.name.charAt(0).toUpperCase() +
              this.props.pokemon.name.slice(1)}
          </Card.Title>
          <Card.Text>
            <Button>
              <Image src={Gotta} fluid />
            </Button>
          </Card.Text>
          <Link
            to={{
              pathname: `/pokemon/${this.props.pokemon.name}`,
              state: { url: this.props.pokemon.url }
            }}
          >
            Detailed view
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default PokemonCard;
