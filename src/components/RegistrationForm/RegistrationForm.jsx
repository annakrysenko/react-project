import { Form, ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

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
    .min(5, 'Password is too short - should be 5 chars minimum')
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
 

  

    const handleSubmit = (values, actions) => {
        const { password,  name, email } = values;
       const registrationData = { name, email, password };
    dispatch(register(registrationData));

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
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="..."
                    autoComplete="off"
                  />
                  <ErrorMessage name="name" component="div" />
                </div>

                <div>
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="off"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div>
                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    maxLength="24"
                    placeholder="..."
                    autoComplete="off"
                  />
             
                  <ErrorMessage name="password" component="div" />
                </div>

                <div>
                  <label htmlFor="repeatPassword">
                    Confirm password <span>*</span>
                  </label>
                  <Field
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    placeholder="..."
                    autoComplete="off"
                    onPaste={e => e.preventDefault()}
                  />
                  <ErrorMessage name="repeatPassword" component="div" />
                </div>

                <button
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
                </button>
                <div>
                  <p> Already have an account?{' '}</p>
                  <Link to="/login">Log in</Link>
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