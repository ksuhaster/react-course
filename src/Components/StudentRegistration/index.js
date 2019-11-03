import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import './styles.scss';
import { MyTextInput } from './inputs/myTextInput';
import { MySelect } from './inputs/mySelect';
import { useLocalStorage } from '../News/useLocalStorage';
import { history } from '../../navigation/history';
import { book } from '../../navigation/book';

export const StudentRegistration = () => {
  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
  };
  const [ studentData, setStudentData ] = useLocalStorage('student', initialValues);
  
  const [ showFormSubmitted, setShowFormSubmitted ] = useState(false);
  const formSubmitted = (
    <span>
        Форма заполнена.<br/><br/>
    </span>
  )
  
  const [ formIsNew, setFormIsNew ] = useState(initialValues === studentData);

  const submitForm = (values) => {
    setStudentData(values)
    console.log(values);
    setShowFormSubmitted(true);
    setFormIsNew(false);
    history.push({pathname: book.student})
  }

  return (
    <section className='customer'>
      <h1>Student Registration</h1>
      {showFormSubmitted  ? ( formSubmitted ) : null }
      <Formik
        initialValues={ studentData }
        onSubmit={ submitForm }
      >
      {({errors, touched}) => {
        return (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              type='text'
              placeholder='John'
            />
            <br />
            <MyTextInput
              label='Surname'
              name='surname'
              type='text'
              placeholder='Black'
            />
            <br />
            <MyTextInput
              label='Age'
              name='age'
              type='integer'
              placeholder='20'
            />
            <br />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='John@gmail.com'
            />
            <br />
            <label htmlFor='sex' />
            <input type='radio' name='sex' value='male' /> Male
            <input type='radio' name='sex' value='female' /> Female
            <br />
            <MySelect label='Speciality' name='speciality'>
              <option value=''>Select your speciality</option>>
              <option value='designer'>Designer</option>>
              <option value='developer'>Developer</option>>
              <option value='manager'>Writer</option>>
            </MySelect>
            <br />
            <button type='submit'>
                {(formIsNew ? 'Submit' : 'Обновить данные')}
            </button>
          </Form>
        )
      }}
      </Formik>
    </section>
  )
};