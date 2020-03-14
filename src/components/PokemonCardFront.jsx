import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Axios from 'axios';
import './style/PokemonDetail.css';

class PokemonCardFront extends Component {
  state = {
    name: null,
    weight: null,
    height: null,
    baseExperience: null,
    sprites: [],
    sprite: null
  };

  componentDidMount() {
    Axios.get(`${this.props.location.state.url}`).then(res =>
      this.setState({
        name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
        weight: res.data.weight,
        height: res.data.height,
        baseExperience: res.data.base_experience,
        sprites: res.data.sprites,
        sprite: res.data.sprites.back_default
      })
    );
  }

  handleMouseOver(view) {
    if (view === 'front') {
      this.setState({
        sprite: this.state.sprites.front_default
      });
    } else {
      this.setState({
        sprite: this.state.sprites.back_default
      });
    }
  }

  render() {
    return (
      <Card className="detailed-card">
        <div
          onMouseOver={() => this.handleMouseOver('front')}
          onMouseOut={() => this.handleMouseOver('back')}
        >
          <Card.Img
            className="card-img"
            variant="top"
            src={`${this.state.sprite}`}
          />
        </div>
        <Card.Footer>
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>
              <p>Weight: {this.state.weight}</p>
              <p>Height: {this.state.height}</p>
              <p>Experience: {this.state.baseExperience}</p>
            </Card.Text>
          </Card.Body>
        </Card.Footer>
      </Card>
    );
  }
}

export default PokemonCardFront;
