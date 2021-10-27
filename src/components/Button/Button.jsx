import React from 'react';
import s from './Button.module.css';

function Button({ text }) {
  return (
    <button className={s.button} type="submit">
      {text}
    </button>
  );
}

export default Button;
