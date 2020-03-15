import React, { useState, useContext } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OpenPokeBall from '../resources/openpokeball.png';
import ClosedPokeBall from '../resources/closedpokeball.png';
import './style/PokemonCardBack.css';

const PokemonCardBack = props => {
  const [backImg, setBackImg] = useState(ClosedPokeBall);

  const handleMouseOver = view => {
    if (view === 'front') {
      setBackImg(OpenPokeBall);
    } else {
      setBackImg(ClosedPokeBall);
    }
  };

  const content = (
    <Card className="cardback">
      <div
        onMouseOver={() => handleMouseOver('front')}
        onMouseOut={() => handleMouseOver('back')}
      >
        <Link
          to={{
            pathname: `/pokemon/${props.pokemon.name}`,
            state: { url: props.pokemon.url }
          }}
        >
          <Card.Img className="backcard-img" variant="top" src={backImg} />
        </Link>
      </div>
      <Card.Body>
        <Card.Title className="text-center">
          {props.pokemon.name.charAt(0).toUpperCase() +
            props.pokemon.name.slice(1)}
        </Card.Title>
      </Card.Body>
    </Card>
  );

  return content;
};

export default PokemonCardBack;
