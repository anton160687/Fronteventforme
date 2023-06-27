import Link from 'next/link';
import { Paths } from '@/constant';
import { Button } from 'react-bootstrap';
import styles from '@/styles/header/Header.module.scss';

function LoginButton() {
  return (
    <Button
      // @ts-ignore: bootstrap bag*
      as={Link}
      href={Paths.SignIn}
      className={styles.header__logbtn}
    >
        <i className='fi-user' />
        <span>Вход</span>
      </Button>
  );
}

export default LoginButton;
