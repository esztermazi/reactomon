import React from 'react';
import styled from 'styled-components';
import './style/TypeList.css';

const TypeList = props => {
  const Section = styled.section`
    color: purple;
    background: ${props => props.background};
    font-family: Pokemon Solid;
  `;

  const content = props.types.map(type => (
    <div className="type-container">
      <Section>
        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
      </Section>
    </div>
  ));
  return content;
};

export default TypeList;
