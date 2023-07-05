import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import CityInput from '../city/CityInput';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

type HeaderNavbarProps = {
  isAuth: boolean;
  signupShow: () => void;
  signinShow: () => void;
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
  },
];

const lkNavigation = [
  {
    id: 1,
    path: Paths.Account,
    text: 'Личный кабинет',
  },
];

function HeaderNavbar({ isAuth, signupShow, signinShow }: HeaderNavbarProps) {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  function handleToggle() {
    setShow(!show);
  }

  const lkButtons = [
    {
      id: 1,
      click: signinShow,
      text: 'Вход',
    },
    {
      id: 2,
      click: signupShow,
      text: 'Регистрация',
    },
  ];

  function renderNavigation(
    array: typeof navigation,
    customClass: string = ''
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
        >
          <span itemProp="name">{text}</span>
        </Link>
      </li>
    ));
  }

  function renderLKButtons(array: typeof lkButtons) {
    return array.map(({ id, click, text }) => (
      <li
        key={id}
        className="nav-item d-xl-none"
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        <Button
          className={
            styles.navbar__item + ' nav-link w-100 justify-content-start'
          }
          variant="link"
          //  itemProp="url"
          onClick={click}
        >
          <span itemProp="name">{text}</span>
        </Button>
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
        {!isAuth
          ? // renderNavigation(lkNavigation.slice(0, 2), 'd-xl-none')

            renderLKButtons(lkButtons)
          : renderNavigation(lkNavigation, 'd-xl-none')}
      </ul>
    </Navbar>
  );
}

export default HeaderNavbar;
