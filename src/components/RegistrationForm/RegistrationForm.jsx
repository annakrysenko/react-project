import { Form, ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';
import {  register } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import {
  AccentSpan,
  BgContainer,
  Button,
  Container,
  Error,
  FieldLabel,
  FieldWrapper,
  FormnWrapper,
  InputField,
  StyledLink,
  Wrapper,} from 'components/LoginForm/LoginForm.styled';



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
        const { password,  name, email } = values;
       const registrationData = { name, email, password };
      const registretion = await dispatch(register(registrationData));
      console.log(registretion)

    isLoggedIn && actions.resetForm();
  };


  return (
    <>
      <div>
     
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, touched }) => {
            return (
              <Form name="SignupForm">
               

                <div>
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
                  <ErrorMessage name="name" component="div" />
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

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
                <div>
                  <p> Already have an account?{' '}</p>
                  <StyledLink to="/login">Log in</StyledLink>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;