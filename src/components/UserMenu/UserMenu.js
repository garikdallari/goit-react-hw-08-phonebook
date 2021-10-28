import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'components/Button/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    color: 'goldenrod',
    fontWeight: 600,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <Button text="Logout" onClick={() => dispatch(authOperations.logOut())} />
    </div>
  );
};

export default UserMenu;
