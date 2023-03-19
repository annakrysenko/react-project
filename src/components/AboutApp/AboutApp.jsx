import React from 'react';
import { DivStyled, TextStyled, AuthorStyled } from './AboutAppStyled.js';
import { RiDoubleQuotesL } from 'react-icons/ri';
import theme from 'styles/theme.js';

const AboutApp = () => {
  return (
    <DivStyled>
      <RiDoubleQuotesL color={theme.colors.accentColor} size="31" />
      <TextStyled>
        Books are the ships of thoughts, wandering through the waves of time.
      </TextStyled>
      <AuthorStyled>Francis Bacon</AuthorStyled>
    </DivStyled>
  );
};

export default AboutApp;
