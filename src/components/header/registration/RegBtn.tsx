import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';

function RegButton() {

  return (
    <Button
      // @ts-ignore: bootstrap bag*
      as={Link}
      variant="primary"
      href={Paths.SignUp}
      className={styles.header__regbtn}
      itemProp="url"
    >
      <span itemProp="name">Регистрация</span>
      <i className="fi-chevron-right ms-2 fs-xs"></i>
    </Button>
  );
}

export default RegButton;
