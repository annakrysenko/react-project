import AboutApp from 'components/AboutApp/AboutApp';
import AboutAppRegistr from 'components/AboutAppRegist/AboutAppRegist';
import LoginForm from 'components/LoginForm/LoginForm';
import { Section } from 'components/RegistrationForm/RegistrationForm.styled';
import React from 'react';
import Media from 'react-media';

const Login = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        large: '(min-width: 768px)',
      }}
    >
      {matches => (
        <>
          {matches.small && <AboutAppRegistr />}
          {matches.large && (
            <Section>
              <LoginForm />
              <AboutApp />
            </Section>
          )}
        </>
      )}
    </Media>
  );
};

export default Login;
