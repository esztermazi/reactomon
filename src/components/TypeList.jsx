import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style/TypeList.css';
import axios from 'axios';

const Section = styled.section`
  color: purple;
  background: ${props => props.background};
  cursor: pointer;
`;

const TypeList = props => {
  const [types, setTypes] = useState([]);

  function getTypes() {
    return axios.get(`https://pokeapi.co/api/v2/type`).then(res => {
      setTypes(res.data.results);
    });
  }

  useEffect(() => {
    getTypes();
  });

  const content = types.map(type => (
    <div className="type-container">
      <Section key={type.name}>
        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
      </Section>
    </div>
  ));
  return content;
};

export default TypeList;
