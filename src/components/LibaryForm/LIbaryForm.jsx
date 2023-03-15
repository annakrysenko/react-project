import { useDispatch } from 'react-redux';
// import { getBooks } from 'redux/book/book-selectors';
import { createBook } from 'redux/books/bookOperations';
import { LABEL, INPUT, FORM, Button, BOX } from './LibaryForm.styled';
import * as yup from 'yup';
// import { useSelector } from 'react-redux';

import { ErrorMessage, Formik } from 'formik';
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
    totalPages: yup
      .number()
      .typeError('The field can only contain numbers')
      .required('Mandatory field')
      .max(9999, 'The number of pages can be less or equal 9999')
      .positive('The field can contain only positive numbers'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(createBook(values));
    actions.resetForm();
  };
  const initialValues = {
    title: '',
    author: '',
    publishYear: '',
    totalPages: '',
  };

  return (
    <BOX>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <FORM>
          <LABEL htmlFor="title">
            Book title
            <INPUT name="title" type="text" required placeholder="..." />
            <ErrorMessage name="title" component="div" />
          </LABEL>

          <LABEL htmlFor="author">
            Author
            <INPUT name="author" placeholder="..." type="text" required />
            <ErrorMessage name="author" component="div" />
          </LABEL>

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

          <LABEL htmlFor="totalPages">
            Amount of pages
            <INPUT name="totalPages" placeholder="..." type="number" required />
            <ErrorMessage name="totalPages" component="div" />
          </LABEL>

          <Button type="submit">Add</Button>
        </FORM>
      </Formik>
    </BOX>
  );
};
export default LibraryForm;
