import { useDispatch, useSelector } from 'react-redux';
import HeaderNavbar from './navbar/Navbar';
import { selectIsAuth } from '@/store/user/userSlice';
import { useEffect } from 'react';
import { Token } from '@/constant';
import { AppDispatch } from '@/store';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';
import { authoriseUser } from '@/store/user/userAPI';

export default function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    //access токены имеют очень короткий срок жизни, поэтому при заходе на сайт будем отправлять refresh
    //TODO уточнить у бэка время жизни refresh-токена
    let refreshToken = localStorage.getItem(Token.Refresh);
    async function getNewAccessToken (token: string) {
      let response = await authoriseUser(token);
      if (response === "success") {
        dispatch(fetchUserDataWithThunk());
      }
      return response;
    }
    if (refreshToken) {
      getNewAccessToken(refreshToken);
    }
  }, []);

  return (
      <HeaderNavbar isAuth={isAuth} />
  );
}
