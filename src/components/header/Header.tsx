import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderNavbar from './navbar/Navbar';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { selectIsAuth, setRole } from '@/store/user/userSlice';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';
import { authoriseUser } from '@/store/user/userAPI';
import { checkIfTokenIsFresh } from '@/services/auth.service';
import { Paths, Token } from '@/constant';
import styles from '@/styles/header/Header.module.scss';
import Logo from './logo/Logo';


function Header() {
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

  //стэйт открытого/закрытого бургер-меню. Необходим для изменения стилей общего контейнера хедера
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  function handleToggle() {
    setIsToggleOpen(!isToggleOpen)
  }

  return (
    <header>
      <Container className={`${styles.header__container} ${!isToggleOpen && 'd-flex justify-content-between align-items-center'}`}>
        {!isToggleOpen && <Logo />}
        <HeaderNavbar
        isAuth={isAuth}
        handleToggle={handleToggle}
        />
      </Container>
    </header>
  )
}

export default Header;