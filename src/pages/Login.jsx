import AboutApp from 'components/AboutApp/AboutApp';
import LoginForm from 'components/LoginForm/LoginForm';
import { Section } from 'components/RegistrationForm/RegistrationForm.styled';
import React from 'react';
import Media from 'react-media';

const Login = () => {
  return (
    <Section>
      <LoginForm />
      <AboutApp />
    </Section>
  );
};

export default Login;
