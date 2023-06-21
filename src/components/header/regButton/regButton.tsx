import { MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Paths } from '@/constant';
//import styles from '@/styles/header/RegButton.module.scss';

function RegButton() {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault;
  }

  return (
    <Button
      variant="primary"
      // @ts-ignore: bootstrap bag*
      as={Link}
      href={Paths.SignUp}
      onClick={handleClick}
      // className={styles.regbtn}
      className="ms-3 fs-sm"
    >
      {/* <Link href={Paths.SignUp} className={styles.regbtn__text}> */}
      {'Регистрация\u00A0'}
      <Image
        src="/img/header/arrowRight.png"
        alt="arrow"
        width={6.67}
        height={11.67}
      />
      {/* </Link> */}
    </Button>
  );
}

export default RegButton;
