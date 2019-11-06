import React from 'react';
import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <>
        <label htmlFor={ props.id || props.name } className={props.className}>{label}</label>
        <input className='text-input' { ...field } { ...props } />
        { meta.touched && meta.error && (
          <span className='error'>{meta.error}</span>
        )}
      </>
    );
  }