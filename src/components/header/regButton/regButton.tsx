import { MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/header/RegButton.module.scss';
import Link from 'next/link';
import { PATHS } from '@/constant';
import Image from 'next/image';

function RegButton() {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault;
  }

  return (
    <Button variant="primary" onClick={handleClick} className={styles.regbtn}>
      <Link href={PATHS.signUp} className={styles.regbtn__text}>
        Регистрация
        <Image src="/img/header/arrowRight.png" alt="arrow" width={6} height={12}/>
      </Link>
    </Button>
  );
}

export default RegButton;