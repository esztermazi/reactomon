import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import './style/PokemonDetail.css';

const PokemonCardFront = props => {
  const [name, setName] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [baseExperience, setBaseExperience] = useState(null);
  const [sprites, setSprites] = useState([]);
  const [currentSprite, setCurrentSprite] = useState(null);

  const getPokemonDetails = () => {
    axios
      .get(`${props.location.state.url}`)
      .then(res =>
        setName(
          res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
          setWeight(res.data.weight),
          setHeight.data.height(),
          setBaseExperience(res.data.base_experience),
          setSprites(res.data.sprites),
          setCurrentSprite(res.data.sprites.back_default)
        )
      );
  };

  useEffect(() => {
    getPokemonDetails();
  });

  const handleMouseOver = view => {
    if (view === 'front') {
      setCurrentSprite(sprites.front_default);
    } else {
      setCurrentSprite(sprites.back_default);
    }
  };

  const content = (
    <Card className="detailed-card">
      <div
        onMouseOver={() => handleMouseOver('front')}
        onMouseOut={() => handleMouseOver('back')}
      >
        <Card.Img className="card-img" variant="top" src={`${currentSprite}`} />
      </div>
      <Card.Footer>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
            <p>Experience: {baseExperience}</p>
          </Card.Text>
        </Card.Body>
      </Card.Footer>
    </Card>
  );
  return content;
};

export default PokemonCardFront;
