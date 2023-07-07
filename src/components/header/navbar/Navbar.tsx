import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import CityInput from '../city/CityInput';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    path: Paths.WeddingSites,
    text: 'Свадебные\u00A0сайты',
  },
  {
    id: 2,
    path: Paths.Hashtags,
    text: 'Хештеги',
  },
  {
    id: 3,
    path: Paths.Invitations,
    text: 'Приглашения',
  },
  {
    id: 4,
    path: Paths.Blog,
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
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>('');
    
  const [show, setShow] = useState<boolean>(false);
  function handleToggle() {
    setShow(!show);
  }
// Дополнительный стейт необходим для SSR, т.к. при серверной генерации мы не м. обратиться к router
  useEffect(()=> {
    setCurrentPath(router.asPath);
  }, [])

  useEffect(()=> {
    setCurrentPath(router.asPath);
    setShow(false);
  }, [router])

  function renderNavigation(array: typeof navigation, customClass: string = '') {
    return array.map(({ id, path, text }) => (
      <li
        key={id}
        className={`nav-item ${customClass}`}
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        <Link
          href={path}
          className={`${styles.navbar__item} ${currentPath === path ? "active" : ""} nav-link`}
          itemProp="url"
        >
          <span itemProp="name">{text}</span>
        </Link>
      </li>
    ));
  }

  return (
    <Navbar
      id="headerNavBar"
      bg="light"
      expand="xl"
      className='w-100 justify-content-end'
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      itemID="/#headerNavBar"
    >
      {/* Меню для мобильных устройств */}
      <Navbar.Toggle
        aria-controls="light-navbar-nav"
        onClick={handleToggle}
      />

      <ul
        id="light-navbar-nav"
        className={`${styles.header__navbar} order-lg-2 navbar-nav navbar-collapse collapse ${show ? "show" : ""}`}
        itemProp="about"
        itemScope
        itemType="http://schema.org/ItemList"
      >
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
    </Navbar>
  );
}

export default HeaderNavbar;
