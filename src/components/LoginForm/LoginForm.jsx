import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .min(6, 'Email must contain at least 10 characters')
    .max(63, 'Email must contain no more than 63 characters')
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
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));

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
              <Form name="LoginForm">
                <div>
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
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
                    placeholder="Пароль"
                    autoComplete="off"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>

                <button
                  type="submit"
                  disabled={(!touched.email && !touched.password) || !isValid}
                >
                  Log in
                </button>
                <Link to="/register">Registration</Link>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
