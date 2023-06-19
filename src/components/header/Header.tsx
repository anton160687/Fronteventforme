import { useDispatch, useSelector } from 'react-redux';
import HeaderNavbar from './navbar/Navbar';
import { selectIsAuth } from '@/store/user/userSlice';
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

    async function getNewAccessToken(token: string) {
      let response = await authoriseUser(token);
      if (response === 'success') {
        dispatch(fetchUserDataWithThunk());
      }
    }

    if (refreshToken && isFresh) {
      getNewAccessToken(refreshToken);
    } else {
      console.log('Нет свежих токенов');
    }
  }, []);

  return <HeaderNavbar isAuth={isAuth} />;
}
