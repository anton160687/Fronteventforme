import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import CityInput from '../city/CityInput';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';

type HeaderNavbarProps = {
  isAuth: boolean;
  signupShow: () => void;
  signinShow: () => void;
};

type navigationType = {
  id: number;
  path: string;
  text: string;
};

const navigation: navigationType[] = [
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
  },
];

function HeaderNavbar({ isAuth, signupShow, signinShow }: HeaderNavbarProps) {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  function handleToggle() {
    setShow(!show);
  }

  const lkNavigation: navigationType[] = [
    {
      id: 1,
      path: '',
      text: 'Вход',
    },
    {
      id: 2,
      path: '',
      text: 'Регистрация',
    },
    {
      id: 3,
      path: Paths.Account,
      text: 'Личный кабинет',
    },
  ];

  function renderNavigation(
    array: navigationType[],
    customClass: string = '',
    handleClick?: () => void
  ) {
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
          className={`${styles.navbar__item} ${
            router.asPath === path ? 'active' : ''
          } nav-link`}
          itemProp="url"
          //работает без проверки
          onClick={handleClick}
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
      className="w-100 justify-content-end"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      itemID="/#headerNavBar"
    >
      {/* Меню для мобильных устройств */}
      <Navbar.Toggle aria-controls="light-navbar-nav" onClick={handleToggle} />

      <ul
        id="light-navbar-nav"
        className={`${
          styles.header__navbar
        } order-lg-2 navbar-nav navbar-collapse collapse ${show ? 'show' : ''}`}
        itemProp="about"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        <CityInput />
        {renderNavigation(navigation.slice(0, 1), 'd-xl-none')}
        <CatalogDropDown />
        {renderNavigation(navigation.slice(1))}
        {!isAuth ? (
          <>
            {renderNavigation(
              lkNavigation.slice(0, 1),
              'd-xl-none',
              signinShow
            )}
            {renderNavigation(
              lkNavigation.slice(1, 2),
              'd-xl-none',
              signupShow
            )}
          </>
        ) : (
          renderNavigation(lkNavigation.slice(2), 'd-xl-none')
        )}
      </ul>
    </Navbar>
  );
}

export default HeaderNavbar;
