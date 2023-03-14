// import moment from 'moment';
// import {
//     TrainingScheduleWrapper,
//     StyledHeading,
//     StyledForm,
//     StyledDatePicker,
//     StyledSelect,
//     StyledOption,
//     SubmitButton,
//     CalendarWrapper,
//     FlexWrapper,
//     StyledInputWrapper,
// } from '../TrainingSchedule.styled';
// import { Form } from 'antd';
// import PropTypes from 'prop-types';

// const TrainingSchedule = ({
//     books,
//     submitCallback,
//     handleStartChange,
//     handleFinishChange,
//     start,
//     finish,
// }) => {
//     const [form] = Form.useForm();

//     const disabledStartDate = current => {
//         return current < moment().startOf('hour');
//     };
//     const disabledFinishDate = current => {
//         return (
//             current < moment(start).add(1, 'day') ||
//             current > moment(start).add(32, 'day')
//         );
//     };

//     const handleSubmit = ({ books }) => {
//         submitCallback(books);
//         form.setFieldsValue({
//             books: null,
//         });
//     };

//     const validateMessages = {
//         required: `Обов'язкове поле`,
//     };

//     return (
//         <TrainingScheduleWrapper>
//             <StyledHeading>My training</StyledHeading>
//             <StyledForm
//                 form={form}
//                 onFinish={handleSubmit}
//                 validateMessages={validateMessages}
//             >
//                 <CalendarWrapper>
//                     <Form.Item
//                         name="start"
//                         initialValue={start}
//                         rules={[
//                             {
//                                 required: true,
//                             },
//                         ]}
//                     >
//                         <StyledDatePicker
//                             onChange={(_, dateString) => {
//                                 handleStartChange(dateString);
//                             }}
//                             format="YYYY-MM-DD HH:mm:ss"
//                             disabledDate={disabledStartDate}
//                             showTime
//                             placeholder="Beginning"
//                             style={{
//                                 margin: '0 20px 0 0',
//                             }}
//                         />
//                     </Form.Item>
//                     <Form.Item
//                         name="finish"
//                         initialValue={finish}
//                         rules={[
//                             {
//                                 required: true,
//                             },
//                         ]}
//                     >
//                         <StyledDatePicker
//                             onChange={(_, dateString) => {
//                                 handleFinishChange(dateString);
//                             }}
//                             format="YYYY-MM-DD HH:mm:ss"
//                             disabledDate={disabledFinishDate}
//                             showTime
//                             placeholder="Completion"
//                             disabled={!start}
//                         />
//                     </Form.Item>
//                 </CalendarWrapper>
//                 <FlexWrapper>
//                     <StyledInputWrapper
//                         name="books"
//                         rules={[
//                             {
//                                 required: true,
//                             },
//                         ]}
//                     >
//                         <StyledSelect
//                             showArrow="true"
//                             placeholder="Choose books from the library"
//                             allowClear
//                         >
//                             {books.map(({ _id, title }) => (
//                                 <StyledOption key={_id} value={_id}>
//                                     {title}
//                                 </StyledOption>
//                             ))}
//                         </StyledSelect>
//                     </StyledInputWrapper>
//                     <Form.Item>
//                         <SubmitButton htmlType="submit">Додати</SubmitButton>
//                     </Form.Item>
//                 </FlexWrapper>
//             </StyledForm>
//         </TrainingScheduleWrapper>
//     );
// };

// TrainingSchedule.propTypes = {
//     books: PropTypes.arrayOf(
//         PropTypes.shape({
//             _id: PropTypes.string.isRequired,
//             title: PropTypes.string.isRequired,
//             author: PropTypes.string.isRequired,
//             publication: PropTypes.string.isRequired,
//             pages: PropTypes.number.isRequired,
//         })
//     ).isRequired,
//     submitCallback: PropTypes.func.isRequired,
//     handleStartChange: PropTypes.func.isRequired,
//     handleFinishChange: PropTypes.func.isRequired,
// };

// export default TrainingSchedule;