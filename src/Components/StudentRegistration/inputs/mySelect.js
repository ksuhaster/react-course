import React from 'react';
import { useField } from 'formik';

export const MySelect = ({ label, children, ...props }) => {
    const [field, meta] = useField({
      ...props
    });
  
    return (
      <>
        <label htmlFor={ props.id || props.name }>{label}</label>
        <select { ...props } {...field} >
          { children }
        </select>
        { meta.touched && meta.error && (
          <span className='error'>{meta.error}</span>
        )}
      </>
    );
  }