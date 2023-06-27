import Link from 'next/link';
import { useState } from 'react';
import { BusinessTypes } from '@/constant';
import { useRouter } from 'next/router';
import { useResize } from '../../../hooks/useResize';
import styles from '@/styles/header/Header.module.scss';

function CatalogDropDown() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const checkSize = useResize(() => { setShow(false) });
// Функция для изменения состояния дропдаунменю "Каталог".
// Состояние должно меняться только на ширине экрана менее xl
// Для этого подключена проверка при помощи кастомного хука:
  function handleToggle() {
    if (checkSize.isScreenXl || checkSize.isScreenXxl) {
      setShow(false)
    } else (
      setShow(!show)
    )
  }

  function renderItems(array: typeof BusinessTypes) {
    return array.map(({ id, path, name }) => (
      <li key={id}>
        <Link
          href={path}
          className={`${router.asPath === path ? "active" : ""} dropdown-item`}
        >
          {name}
        </Link>
      </li>
    ))
  }

  return (
    <li
      className={show ? "nav-item dropdown show" : "nav-item dropdown"}
      onClick={handleToggle}
    >
      <span
        aria-expanded={show ? "true" : "false"}
        className={`m-0 ${router.asPath === "/catalog/places" ? "active" : ""} ${show ? "dropdown-toggle nav-link show" : "dropdown-toggle nav-link"}`}
      >
        Каталог
      </span>
      <ul className={`dropdown-menu ${show ? "show" : ""} ${styles.header__dropdown}`}>
        {renderItems(BusinessTypes)}
      </ul>
    </li>
  )
}

export default CatalogDropDown;