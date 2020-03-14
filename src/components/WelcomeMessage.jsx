import React from 'react';
import Master from '../resources/master.png';
import { Image, Alert } from 'react-bootstrap';
import './style/WelcomeMessage.css';

const WelcomeMessage = props => {
  const content = (
    <div className="welcome-container">
      <Image
        src={Master}
        className="figure-img img-fluid z-depth-1 welcomepic"
        alt=""
      />
      <Alert variant="warning">
        Welcome pokemon master, start your journey
        <Alert.Link href="/pokemons"> NOW</Alert.Link>!
      </Alert>
    </div>
  );
  return content;
};

export default WelcomeMessage;
