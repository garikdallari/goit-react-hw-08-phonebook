import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import authSelectors from '../redux/auth/auth-selectors';

const styles = {
  header: {
    width: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,201,80,0.4)',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
