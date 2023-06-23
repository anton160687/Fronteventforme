import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';

function RegButton() {
  
  return (
    <Button
      variant="primary"
      // @ts-ignore: bootstrap bag*
      as={Link}
      href={Paths.SignUp}
      className={styles.header__reg_btn}
    >
      Регистрация
      <i className="fi-chevron-right ms-2 fs-xs"></i>
    </Button>
  );
}

export default RegButton;
