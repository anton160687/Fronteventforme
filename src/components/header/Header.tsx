import { useEffect } from 'react';
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

  return (
    <header>
      <Container className={styles.header__container}>
        <section id="logo">
          <Link href={Paths.Home}>
          <Image
            className={`${styles.header__logo} me-2 me-xl-4 navbar-brand`}
            src="/img/header/logo.png"
            width={143}
            height={33}
            alt="EventForMe"
            title="Компания EventForMe"
          />
          </Link>
        </section>
        <HeaderNavbar isAuth={isAuth} />
      </Container>
    </header>
  )
}

export default Header;