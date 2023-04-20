import { MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/header/RegButton.module.scss';
import Link from 'next/link';

function RegButton() {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault;
  }

  return (
    <Button variant="primary" onClick={handleClick} className={styles.regbtn}>
      <Link href="/signUp" className={styles.regbtn__text}>
        Регистрация
        <img src="/img/header/arrowRight.png" alt="arrow" />
      </Link>
    </Button>
  );
}

export default RegButton;
