import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { selectIsAuth, selectUser, setRole } from '@/store/user/userSlice';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';
import { authoriseUser } from '@/store/user/userAPI';
import { checkIfTokenIsFresh } from '@/services/auth.service';
import { Token } from '@/constant';
import HeaderNavbar from './navbar/Navbar';
import Logo from './logo/Logo';
import LoginButton from './login/LoginBtn';
import RegButton from './registration/RegBtn';
import Avatar from './avatar/Avatar';
import styles from '@/styles/header/Header.module.scss';

function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);

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
    <header
      id="header"
      itemScope
      itemType="http://schema.org/WPHeader"
      itemID="/#header"
    >
      <Container className="px-5">
        <Row className="align-items-baseline mx-0">
          {/* лого */}
          <Col className="d-none d-xl-block col-xl-2 ps-0">
            <Logo />
          </Col>
          {/* основная навигация */}
          <Col className="d-flex justify-content-end col-xl-7 px-0">
            <HeaderNavbar isAuth={isAuth} />
          </Col>
          {/* кнопки входа/регистрации/аватар */}
          <Col className="d-none d-xl-block col-xl-3 mt-auto mb-auto pe-0">
            <nav
              id="headerNavAuth"
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
              itemID="/#headerNavAuth"
            >
              <ul
                className={`${
                  isAuth
                    ? styles.header__authnav_auth
                    : styles.header__authnav_nonauth
                } m-0 p-0`}
                itemProp="about"
                itemScope
                itemType="http://schema.org/ItemList"
              >
                {!isAuth && (
                  <li
                    className="m-0"
                    itemProp="itemListElement"
                    itemScope
                    itemType="http://schema.org/ItemList"
                  >
                    <LoginButton />
                  </li>
                )}
                {!isAuth && (
                  <li
                    className="m-0"
                    itemProp="itemListElement"
                    itemScope
                    itemType="http://schema.org/ItemList"
                  >
                    <RegButton />
                  </li>
                )}
                {isAuth && user.is_bride !== undefined && (
                  <li
                    className="m-0"
                    itemProp="itemListElement"
                    itemScope
                    itemType="http://schema.org/ItemList"
                  >
                    <meta itemProp="name" content="Личный кабинет" />
                    <Avatar
                      is_bride={user.is_bride}
                      username={user.username}
                      first_name={user.first_name}
                      last_name={user.last_name}
                      avatar={user.avatar}
                    />
                  </li>
                )}
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
