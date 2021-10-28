import React from 'react';
import s from './Button.module.css';

function Button({ text, onClick }) {
  return (
    <button className={s.button} type="submit" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
