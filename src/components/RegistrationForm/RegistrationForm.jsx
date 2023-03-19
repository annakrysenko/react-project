import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import {
  AccentSpan,
  BgContainer,
  Button,
  Container,
  Error,
  FieldLabel,
  FieldWrapper,
  InputField,
} from 'components/LoginForm/LoginForm.styled';
import { FcGoogle } from 'react-icons/fc';
import {
  FormnWrapper,
  GoogleButton,
  LoginWrapper,
  Paragraph,
  StyledLink,
  Wrapper,
} from './RegistrationForm.styled';
import { toast } from 'react-toastify';
// import MobileRoute from 'components/MobileRoute/MobileRoute';
// import AboutAppRegistr from 'components/AboutAppRegist/AboutAppRegist';
// import Media from 'react-media';

const validationSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .matches(/^[a-zA-Z0-9]/, 'Name must starts with letter or number')
    .min(4, 'Name must contain at least 4 characters')
    .max(50, 'Name must contain no more than 50 characters')
    .required('Name is a required field'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .min(6, 'Email must contain at least 6 characters')
    .max(50, 'Email must contain no more than 50 characters')
    .matches(/^[a-zA-Z0-9]/, 'Name must start with letter or number')
    .matches(
      /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{2,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'The Email field can only contain Latin letters, numbers and signs, and at least 2 charachters before "@"'
    )
    .required('Email is a required field'),
  password: yup
    .string('Enter your password')
    .matches(/^[a-zA-Z0-9]/, 'Password must start with letter or number')
    .matches(
      /^([a-zA-Z0-9@.!#$%&’*+/=?^_`{|}~-])*$/,
      'Password must not contain spaces'
    )
    .min(8, 'Password is too short - should be 5 chars minimum')
    .max(30, 'Password must contain no more than 30 characters')
    .required('Password is a required field'),
  repeatPassword: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is a required field'), //можна додати npm yup-password
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const isRegistrated = useSelector(getIsRegistrated);

  // useEffect(() => {
  // isRegistrated && dispatch(logIn)

  // },[isRegistrated])

  const handleSubmit = async (values, actions) => {
    const { password, name, email } = values;
    const registrationData = { name, email, password };
    const registretion = await dispatch(register(registrationData));
    console.log('registretion', registretion)

    isLoggedIn && actions.resetForm();
  };
  const handleButtonClick = () => {
    toast.error('Please, try later!');
  };

  return (
    <>
      <Container>
        <BgContainer>
          <Wrapper>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, touched }) => {
                return (
                  <FormnWrapper name="SignupForm">
                    <GoogleButton type="submit" onClick={handleButtonClick}>
                      <FcGoogle size="18px" />
                      Google
                    </GoogleButton>

                    <FieldWrapper>
                      <FieldLabel htmlFor="name">
                        Name <span>*</span>
                      </FieldLabel>
                      <InputField
                        id="name"
                        name="name"
                        type="text"
                        placeholder="name"
                        // autoComplete="off"
                      />
                      <Error name="name" component="div" />
                    </FieldWrapper>

                    <FieldWrapper>
                      <FieldLabel htmlFor="email">
                        Email <AccentSpan>*</AccentSpan>
                      </FieldLabel>
                      <InputField
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        // autoComplete="off"
                      />
                      <Error name="email" component="div" />
                    </FieldWrapper>

                    <FieldWrapper>
                      <FieldLabel htmlFor="password">
                        Password <AccentSpan>*</AccentSpan>
                      </FieldLabel>
                      <InputField
                        id="password"
                        name="password"
                        type="password"
                        maxLength="24"
                        placeholder="..."
                        // autoComplete="off"
                      />

                      <Error name="password" component="div" />
                    </FieldWrapper>

                    <FieldWrapper>
                      <FieldLabel htmlFor="repeatPassword">
                        Confirm password <AccentSpan>*</AccentSpan>
                      </FieldLabel>
                      <InputField
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        placeholder="..."
                        // autoComplete="off"
                        onPaste={e => e.preventDefault()}
                      />
                      <Error name="repeatPassword" component="div" />
                    </FieldWrapper>

                    <Button
                      type="submit"
                      disabled={
                        (!touched.name &&
                          !touched.email &&
                          !touched.password &&
                          !touched.repeatPassword) ||
                        !isValid
                      }
                      variant="filled"
                    >
                      Register
                    </Button>
                    <LoginWrapper>
                      <Paragraph> Already have an account?</Paragraph>
                      <StyledLink to="/login">Log in</StyledLink>
                    </LoginWrapper>
                  </FormnWrapper>
                );
              }}
            </Formik>
          </Wrapper>
        </BgContainer>
      </Container>

      {/* 
         <MobileRoute redirectTo="/register">

  <AboutAppRegistr />
</MobileRoute> */}

      {/* <Media
          queries={{
            small: '(min-width: 768px)',
          }}
        >
          {matches => <>{matches.small && <AboutAppRegistr />}</>}
        </Media> */}

      {/* <Media query="(min-width: 768px)" render={() =>
          (
            <AboutAppRegistr />
          )}
        />  */}
    </>
  );
};

export default RegistrationForm;
