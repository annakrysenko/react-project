import AboutApp from 'components/AboutApp/AboutApp';
import LoginForm from 'components/LoginForm/LoginForm';
import { Section } from 'components/RegistrationForm/RegistrationForm.styled';
import React from 'react';
import Media from 'react-media';

const Login = () => {
  return (
    <Media
      query="(min-width: 768px)"
      render={() => (
        <Section>
          <LoginForm />
          <AboutApp />
        </Section>
      )}
    />
  );
};

export default Login;
