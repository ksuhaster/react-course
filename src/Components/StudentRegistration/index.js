import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './styles.scss';
import { MyTextInput } from './inputs/myTextInput';
import { MySelect } from './inputs/mySelect';
import { useLocalStorage } from '../../helpers/useLocalStorage';
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
  const [ formIsNew, setFormIsNew ] = useState(JSON.stringify(initialValues) === JSON.stringify(studentData));

  const submitForm = (values) => {
    setStudentData(values);
    console.log(values);
    setFormIsNew(false);
    history.push({pathname: book.student})
  };

  const validateForm = (values) => {
      let errors = {};

      if(!values.firstName || typeof values.firstName !== 'string') {
          errors.firstName = 'Required text';
      }

      if(!values.surname) {
          errors.surname = 'Required text';
      }

      if (values.age) {
          try {
              let age = parseInt(values.age);
              if (typeof age !== 'number' || age < 6 || age > 60) {
                  errors.age = 'Should be number 6-60';
              }
          } catch {
              errors.age = 'Should be number 6-60';
          }
      }

      if(!values.email || !(/\S+@\S+\.\S+/).test(values.email) ) {
          errors.email = 'Required email';
      }

      if(!values.sex) {
          errors.sex = 'Required sex';
      }

      if(!values.speciality) {
          errors.speciality = 'Required';
      }

      return errors;
  };

  return (
    <section className='customer'>
      <h1>Student Registration</h1>
      <Formik
        initialValues={ studentData }
        onSubmit={ submitForm }
        validate={ validateForm }
      >
      {({errors, touched}) => {
        return (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              type='text'
              placeholder='John'
              className={errors.firstName ? 'error' : null}
            />
            <br />
            <MyTextInput
              label='Surname'
              name='surname'
              type='text'
              placeholder='Black'
              className={errors.surname ? 'error' : null}
            />
            <br />
            <MyTextInput
              label='Age'
              name='age'
              type='number'
              placeholder='20'
              className={errors.age ? 'error' : null}
            />
            <br />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='John@gmail.com'
              className={errors.email ? 'error' : null}
            />
            <br />
            <div className={errors.sex ? 'error' : null}>
              Sex:
              <Field type="radio" name="sex" value="male" /> Male
              <Field type="radio" name="sex" value="female" /> Female
                { errors.sex && (
                    <span className='error'>{errors.sex}</span>
                )}
            </div>
            <br />
            <MySelect label='Speciality' name='speciality' className={errors.speciality ? 'error' : null}>
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