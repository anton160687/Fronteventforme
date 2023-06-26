import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import Navbar from 'react-bootstrap/Navbar';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import CityInput from '../city/CityInput';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';

type HeaderNavbarProps = {
  isAuth: boolean;
};

const navigation = [
  {
    id: 0,
    path: Paths.Home,
    text: 'Главная',
  },
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
  }
];

const lkNavigation = [
  {
    id: 1,
    path: Paths.SignIn,
    text: 'Вход',
  },
  {
    id: 2,
    path: Paths.SignUp,
    text: 'Регистрация',
  },
  {
    id: 3,
    path: Paths.Account,
    text: 'Личный кабинет',
  },
]

function HeaderNavbar({ isAuth }: HeaderNavbarProps) {
  const user = useSelector(selectUser);

  function renderNavigation(array: typeof navigation, customClass: string = '') {
    return array.map(({ id, path, text }) => (
      <li key={id} className={`nav-item ${customClass}`}>
        <Link href={path} className={`${styles.navbar__item} nav-link`}>
          {text}
        </Link>
      </li>
    ));
  }

  return (
    <Navbar bg="light" expand="xl" className='w-100 justify-content-end'>
      {/* Меню для мобильных устройств */}
      <Navbar.Toggle
        aria-controls="light-navbar-nav"
      />

      <Navbar.Collapse id="light-navbar-nav" className={`${styles.header__navbar} order-lg-2`}>
        <ul className='navbar-nav'>
          <CityInput />
          {renderNavigation(navigation.slice(0, 1), 'd-xl-none')}
          <CatalogDropDown />
          {renderNavigation(navigation.slice(1))}
          {!isAuth ?
            renderNavigation(lkNavigation.slice(0, 2), 'd-xl-none')
            :
            renderNavigation(lkNavigation.slice(2), 'd-xl-none')
          }
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNavbar;
