import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import './styles.scss';
import { MyTextInput } from './inputs/myTextInput';
import { MySelect } from './inputs/mySelect';

export const StudentRegistration = () => {
  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
  };
  const [ showFormSubmitted, setShowFormSubmitted ] = useState(false);
  const formSubmitted = (
    <span>
        Форма заполнена.<br/><br/>
    </span>
)
  
  const submitForm = (values) => {
    console.log(values);
    setShowFormSubmitted(true);
  }

  return (
    <section className='customer'>
      <h1>Student Registration</h1>
      {showFormSubmitted  ? ( formSubmitted ) : null }
      <Formik
        initialValues={ initialValues }
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
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
      </Formik>
    </section>
  )
};