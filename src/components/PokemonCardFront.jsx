import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { CatchedContext } from '../contexts/CatchedContext';
import Gotta from '../resources/gotta.png';

import axios from 'axios';
import './style/PokemonCardFront.css';

const PokemonCardFront = props => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [baseExperience, setBaseExperience] = useState(null);
  const [sprites, setSprites] = useState([]);
  const [currentSprite, setCurrentSprite] = useState(null);
  const [isCaught, setCaught] = useState(false);
  const [caughtpokemons, setCaughtPokemons] = useContext(CatchedContext);

  const getPokemonDetails = () => {
    axios
      .get(`${props.location.state.url}`)
      .then(res =>
        setName(
          res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
          setId(res.data.id),
          setWeight(res.data.weight),
          setHeight(res.data.height),
          setBaseExperience(res.data.base_experience),
          setSprites(res.data.sprites),
          setCurrentSprite(res.data.sprites.back_default)
        )
      );
  };

  useEffect(() => {
    getPokemonDetails();
  });

  const handleMouseOver = e => {
    setCurrentSprite(sprites.front_default);
  };

  const handleMouseOut = e => {
    setCurrentSprite(sprites.back_default);
  };

  const catchPokemon = e => {
    e.preventDefault();
    setCaughtPokemons([...caughtpokemons, { ...sprites }]);
    setCaught(true);
  };

  const content = (
    <React.Fragment>
      <Card className="detailed-card">
        <div
          onMouseOver={() => handleMouseOver}
          onMouseOut={() => handleMouseOut}
        >
          <Card.Img
            className="card-img"
            variant="top"
            src={`${currentSprite}`}
          />
        </div>
        <Card.Footer>
          <Card.Body>
            <Card.Title>
              #{id} {name}
            </Card.Title>
            <Card.Text className="mx-auto my-0">Weight: {weight}</Card.Text>
            <Card.Text className="mx-auto my-0">Height: {height}</Card.Text>
            <Card.Text className="mx-auto my-0">
              Experience: {baseExperience}
            </Card.Text>

            {!isCaught ? (
              <Button>
                <Image
                  onClick={catchPokemon}
                  className="catchimg"
                  src={Gotta}
                  fluid
                />{' '}
              </Button>
            ) : null}
          </Card.Body>
        </Card.Footer>
        <Card.Footer>
          <small className="text-muted">
            Is it Caught?: {isCaught.toString()}
          </small>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
  return content;
};

export default PokemonCardFront;
