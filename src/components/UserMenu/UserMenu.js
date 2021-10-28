import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'components/Button/Button';
import avatar from './51-518911_sad-crying-cat-face-clipart.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    borderRadius: 50,
  },

  name: {
    color: 'goldenrod',
    fontWeight: 600,
    marginRight: 12,
    textTransform: 'capitalize',
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="50" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button text="Logout" onClick={() => dispatch(authOperations.logOut())} />
    </div>
  );
};

export default UserMenu;
