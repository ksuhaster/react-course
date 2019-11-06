import React from 'react';
import { useField } from 'formik';

export const MyRadio = ({ label, children, ...props }) => {
    const [field, meta] = useField({
        ...props
    });

    const children_modified = children.map((child, id) => (
        <label key={id}>
            <input type='radio' name={child.props.name} value={child.props.value} { ...props } {...field}/>
            {child.props.label}
        </label>
    ));


    return (
        <div className={ props.className }>
            <label htmlFor={ props.id || props.name }>{label}</label>
            { children_modified }
            { meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )}
        </div>
    );
}