import React, { Component } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OpenPokeBall from '../resources/openpokeball.png';
import Gotta from '../resources/gotta.png';
import ClosedPokeBall from '../resources/closedpokeball.png';
import './style/PokemonCard.css';

class PokemonCard extends Component {
  state = {
    backimg: ClosedPokeBall
  };

  handleMouseOver(view) {
    if (view === 'front') {
      this.setState({
        backimg: OpenPokeBall
      });
    } else {
      this.setState({
        backimg: ClosedPokeBall
      });
    }
  }

  render() {
    return (
      <Card className="cardback">
        <div
          onMouseOver={() => this.handleMouseOver('front')}
          onMouseOut={() => this.handleMouseOver('back')}
        >
          <Link
            to={{
              pathname: `/pokemon/${this.props.pokemon.name}`,
              state: { url: this.props.pokemon.url }
            }}
          >
            <Card.Img
              className="backcard-img"
              variant="top"
              src={this.state.backimg}
            />
          </Link>
        </div>
        <Card.Body>
          <Card.Title className="text-center">
            {this.props.pokemon.name.charAt(0).toUpperCase() +
              this.props.pokemon.name.slice(1)}
          </Card.Title>
        </Card.Body>
        <Card.Footer className="float-right">
          <Button>
            <Image className="catchimg" src={Gotta} fluid />
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default PokemonCard;
