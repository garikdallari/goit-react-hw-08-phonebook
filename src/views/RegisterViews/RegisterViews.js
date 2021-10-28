import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'components/Button/Button';
import s from './RegisterViews.module.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    color: 'goldenrod',
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    console.log({ name, email, password });
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Registration</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            autoComplete="off"
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            autoComplete="off"
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            autoComplete="off"
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button text="Sign up" />
      </form>
    </div>
  );
}
