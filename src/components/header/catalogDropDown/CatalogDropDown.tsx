import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/header/Header.module.scss';

const catalogItems = [
  {
    id: 1,
    path: 'dresses',
    text: 'Свадебные платья'
  },
  {
    id: 2,
    path: 'places',
    text: 'Площадки'
  },
  {
    id: 3,
    path: 'hosts',
    text: 'Ведущие'
  },
  {
    id: 4,
    path: 'photo',
    text: 'Фотографы'
  },
  {
    id: 5,
    path: 'video',
    text: 'Видеографы'
  },
  {
    id: 6,
    path: 'music',
    text: 'Музыканты'
  },
  {
    id: 7,
    path: 'style',
    text: 'Стилисты'
  },
]

function CatalogDropDown() {
  const [show, setShow] = useState<boolean>(false);
  function handleToggle() {
    setShow(!show);
  }

  function renderItems() {
    return catalogItems.map(({ id, path, text }) => (
      <li key={id} className="dropdown-item">
        <Link href={`/catalog/${path}`}>
          {text}
        </Link>
      </li>
    ))
  }

  return (
    <li className={show ? "nav-item dropdown show" : "nav-item dropdown"} onClick={handleToggle}>
      <Link
        href=""
        aria-expanded={show ? "true" : "false"}
        className={show ? "dropdown-toggle nav-link show" : "dropdown-toggle nav-link"}
      >
        Каталог
      </Link>
      <ul className={show ? 'dropdown-menu show': 'dropdown-menu'}>
        {renderItems()}
      </ul>
    </li>
  )
}

export default CatalogDropDown;