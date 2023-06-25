import { useEffect } from 'react';
import HeaderNavbar from './navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { selectIsAuth, selectUser, setRole } from '@/store/user/userSlice';
import { fetchUserDataWithThunk } from '@/store/user/userSlice';
import { authoriseUser } from '@/store/user/userAPI';
import { checkIfTokenIsFresh } from '@/services/auth.service';
import { Token } from '@/constant';
import Logo from './logo/Logo';
import LoginButton from './login/LoginBtn';
import RegButton from './regButton/RegBtn';
import Avatar from './avatar/Avatar';


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
    <header>
      <Container>
        <Row className='align-items-baseline'>
          <Col className='d-none d-xl-block'>
            <Logo />
          </Col>
          <Col className='d-flex justify-content-end'>
            <HeaderNavbar isAuth={isAuth} />
          </Col>
          <Col className='d-none d-xl-block'>
            {/* кнопки входа/регистрации/ЛК */}
            <nav>
              <ul className="navbar-nav">
                {!isAuth && <li><LoginButton /></li>}
                {!isAuth && <li><RegButton /></li>}

                {isAuth && user.is_bride !== undefined && (
                  <li>
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
  )
}

export default Header;