import React from 'react';
import './styles.scss';
import cx from 'classnames';

const isButtonDisabled = () => false;

export const Button = () => {
  const customClassNames = cx({
    btn: true,
    disabled: isButtonDisabled()
  });

  return (
    <button className={ customClassNames }>Click me!</button>
  )
};