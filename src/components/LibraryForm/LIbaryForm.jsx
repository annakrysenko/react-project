import { useDispatch } from 'react-redux';
// import { getBooks } from 'redux/book/book-selectors';
import { createBook } from 'redux/books/booksOperations';
import {
  LABEL,
  INPUT,
  FORM,
  Button,
  BOX,
  WrapperINPUT,
  WrapperTabletINPUT,
} from 'components/LibraryForm/LibaryForm.styled';
import * as yup from 'yup';
// import { useSelector } from 'react-redux';

import { useLocation, Link } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import { ICONARROW } from 'components/LibraryForm/LibaryForm.styled';
const LibraryForm = () => {
  const dispatch = useDispatch();
  const date = new Date();
  const year = date.getFullYear();
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Mandatory field')
      .max(50, 'The field cannot contain more than 50 characters'),
    author: yup.string().required('Mandatory field'),
    publishYear: yup
      .number()
      .typeError('The field can only contain numbers')
      .max(year, `The year of publication cannot be greater ${year}`)
      .positive('The field can contain only positive numbers'),
    pagesTotal: yup
      .number()
      .typeError('The field can only contain numbers')
      .required('Mandatory field')
      .max(9999, 'The number of pages can be less or equal 9999')
      .positive('The field can contain only positive numbers'),
  });
  const location = useLocation();

  const handleSubmit = (values, actions) => {
    dispatch(createBook(values));
    actions.resetForm();
  };
  const initialValues = {
    title: '',
    author: '',
    publishYear: '',
    pagesTotal: '',
  };

  return (
    <BOX>
      <Link to={'/'} state={{ from: location }}>
        <ICONARROW viewBox="0 0 24 12" />
      </Link>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <FORM>
          <WrapperINPUT>
            <LABEL htmlFor="title">
              Book title
              <INPUT name="title" type="text" required placeholder="..." />
              <ErrorMessage name="title" component="div" />
            </LABEL>
          </WrapperINPUT>
          <WrapperTabletINPUT>
            <WrapperINPUT>
              <LABEL htmlFor="author">
                Author
                <INPUT name="author" placeholder="..." type="text" required />
                <ErrorMessage name="author" component="div" />
              </LABEL>
            </WrapperINPUT>
            <WrapperINPUT>
              <LABEL htmlFor="publishYear">
                Publication date
                <INPUT
                  name="publishYear"
                  placeholder="..."
                  type="number"
                  required
                />
                <ErrorMessage name="publishYear" component="div" />
              </LABEL>
            </WrapperINPUT>
            <WrapperINPUT>
              <LABEL htmlFor="pagesTotal">
                Amount of pages
                <INPUT
                  name="pagesTotal"
                  placeholder="..."
                  type="number"
                  required
                />
                <ErrorMessage name="pagesTotal" component="div" />
              </LABEL>
            </WrapperINPUT>
          </WrapperTabletINPUT>

          <Button type="submit">Add</Button>
        </FORM>
      </Formik>
    </BOX>
  );
};
export default LibraryForm;
