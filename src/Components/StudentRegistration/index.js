import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles.scss';
import { MyTextInput } from './inputs/myTextInput';
import { MySelect } from './inputs/mySelect';
import { history } from '../../navigation/history';
import { book } from '../../navigation/book';
import { studentActions } from '../../bus/student/actions'

export const StudentRegistration = () => {
  const initialValues = {
    firstName: '',
    surname: '',
    password: '',
    confirmpassword: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
  };

  const validationSchema = Yup.object().shape({
      firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
      surname: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
      password: Yup.string()
          .required('Required')
          .min(10, 'Too short - should be 10 chars minimum.')
          .matches(/[A-Za-z]/, 'Must have symbols')
          .matches(/\d.*?\d.*?\d/, 'Must have min 3 numbers'),
      confirmpassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Should be equal to Password')
          .required('Confirm Password is required'),
      age: Yup.number()
          .min(6)
          .max(60),
      email: Yup.string()
          .email('Invalid email')
          .required('Required'),
      sex: Yup.string()
          .oneOf([
              'male',
              'female'
          ], 'Invalid Sex')
          .required('Required'),
      speciality: Yup.string()
          .oneOf([
              'designer',
              'developer',
              'manager'
          ], 'Invalid Speciality')
          .required('Required'),
  });

  const dispatch = useDispatch();
  const { studentData } = useSelector((state) => state.student) || initialValues;
  const [ formIsNew, setFormIsNew ] = useState(JSON.stringify(initialValues) === JSON.stringify(studentData));

  const saveStudent = (values) => {
      dispatch(studentActions.setStudent(values))
  };

  const submitForm = (values) => {
    saveStudent(values);
    setFormIsNew(false);
    history.push({pathname: book.student})
  };

  return (
    <section className='customer'>
      <h1>Student Registration</h1>
      <Formik
        initialValues={ studentData }
        onSubmit={ submitForm }
        validationSchema={ validationSchema }
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
              label='Password'
              name='password'
              type='password'
              className={errors.password ? 'error' : null}
            />
            <br />
            <MyTextInput
              label='Confirm Password'
              name='confirmpassword'
              type='password'
              className={errors.password ? 'error' : null}
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