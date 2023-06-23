import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import Navbar from 'react-bootstrap/Navbar';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import CityInput from '../city/CityInput';
import RegButton from '../regButton/RegBtn';
import LoginButton from '../login/LoginBtn';
import Avatar from '../avatar/Avatar';
import styles from '@/styles/header/Header.module.scss';


type HeaderNavbarProps = {
  isAuth: boolean;
};

const navigation = [
  {
    id: 1,
    path: '#',
    text: 'Свадебные\u00A0сайты',
  },
  {
    id: 2,
    path: '#',
    text: 'Хештеги',
  },
  {
    id: 3,
    path: '#',
    text: 'Приглашения',
  },
  {
    id: 4,
    path: '#',
    text: 'Блог',
  },
];

function HeaderNavbar({ isAuth }: HeaderNavbarProps) {
  const user = useSelector(selectUser);

  function renderNavigation() {
    return navigation.map(({ id, path, text }) => (
      <li key={id} className={`${styles.navbar__item} nav-item`}>
        <Link href={path} className="nav-link">
          {text}
        </Link>
      </li>
    ));
  }

  return (
    <Navbar bg="light" expand="xl">
      <Navbar.Collapse id="light-navbar-nav" className="order-lg-2">
        <ul className={`${styles.navbar__central_block} navbar-nav`}>
          <CityInput />
          <CatalogDropDown />
          {renderNavigation()}
        </ul>
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
      </Navbar.Collapse>
      {/* Меню для мобильных устройств */}
      <Navbar.Toggle aria-controls="light-navbar-nav" className="ms-auto" />
    </Navbar>
  );
}

export default HeaderNavbar;
