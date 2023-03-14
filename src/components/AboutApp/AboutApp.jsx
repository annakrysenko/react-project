import React from 'react';
import { DivStyled, TextStyled, AuthorStyled } from './AboutAppStyled.js';
const AboutApp = () => {
  return (
    <DivStyled>
      <TextStyled>
        Books are the ships of thoughts, wandering through the waves of time.
      </TextStyled>
      <AuthorStyled>Francis Bacon</AuthorStyled>
    </DivStyled>
  );
};

export default AboutApp;
