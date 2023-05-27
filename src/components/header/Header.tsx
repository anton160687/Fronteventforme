import { useSelector } from 'react-redux';
import HeaderNavbar from './navbar/Navbar';
import { selectIsAuth } from '@/store/user/userSlice';

export default function Header() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <HeaderNavbar isAuth={isAuth} />
    </>
  );
}
