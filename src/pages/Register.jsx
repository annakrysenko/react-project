import AboutAppRegistr from 'components/AboutAppRegist/AboutAppRegist';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Section } from 'components/RegistrationForm/RegistrationForm.styled';
import React from 'react';
import Media from 'react-media';

const Register = () => {
  return (
    <>
      <Section>
      <RegistrationForm />
       <Media query="(min-width: 768px)" render={() =>
          (
            <AboutAppRegistr />
          )}
        /> 
        {/* <AboutAppRegistr /> */}
        </Section>
    </>
  );
};

export default Register;
