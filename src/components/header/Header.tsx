import { useDispatch, useSelector } from 'react-redux';
import HeaderNavbar from './navbar/Navbar';
import { selectIsAuth, setAuth, setRole } from '@/store/user/userSlice';
import { useEffect } from 'react';
import { Token } from '@/constant';
import { AppDispatch } from '@/store';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';
import { authoriseUser } from '@/store/user/userAPI';
import { checkIfTokenIsFresh } from '@/services/auth.service';

export default function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let refreshToken = localStorage.getItem(Token.Refresh);
    let isFresh = checkIfTokenIsFresh();
    let role = localStorage.getItem('role');

    async function getUserData(token: string) {
      let response = await authoriseUser(token);
      if (response === 'success') {
        dispatch(fetchUserDataWithThunk());
        dispatch(setRole(!!role));
      }
    }
    
    if (refreshToken && isFresh && role) {
      getUserData(refreshToken);
    }
  }, []);

  return <HeaderNavbar isAuth={isAuth} />;
}
