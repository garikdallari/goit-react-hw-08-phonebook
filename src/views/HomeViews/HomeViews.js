import React from 'react';
import { ReactComponent as HoleImage } from '../../images/Black-Hole.svg';
import s from './HomeViews.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      phoneb<span className={s.span}>O_o</span>k
    </h1>
    <HoleImage className={s.image} />
  </div>
);

export default HomeView;
