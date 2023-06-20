import { useDispatch, useSelector } from 'react-redux';
import HeaderNavbar from './navbar/Navbar';
import { selectIsAuth, setAuth } from '@/store/user/userSlice';
import { useEffect } from 'react';
import { Token } from '@/constant';
import { AppDispatch } from '@/store';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';
import { authoriseUser } from '@/store/user/userAPI';
import { checkIfTokenIsFresh } from '@/services/auth.service';

export default function Header() {
  const isAuth = useSelector(selectIsAuth);
  console.log ('статус из хедера ' + isAuth);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let refreshToken = localStorage.getItem(Token.Refresh);
    let isFresh = checkIfTokenIsFresh();

    async function getUserData(token: string) {
      let response = await authoriseUser(token);
      if (response === 'success') {
        dispatch(fetchUserDataWithThunk());
      }
    }

    if (refreshToken && isFresh) {
      getUserData(refreshToken);
    } else {
      console.log(isAuth);
    }
  }, []);

  return <HeaderNavbar isAuth={isAuth} />;
}
