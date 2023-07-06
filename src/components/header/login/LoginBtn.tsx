import Link from 'next/link';
import { Paths } from '@/constant';
import { Button } from 'react-bootstrap';
import styles from '@/styles/header/Header.module.scss';

type LoginButtonProps = {
  handleClick: () => void;
};

function LoginButton({ handleClick }: LoginButtonProps) {
  return (
    <Button
      // @ts-ignore: bootstrap bag*
      // as={Link}
      //   href={Paths.SignIn}
      className={styles.header__logbtn}
      //  itemProp="url"
      onClick={handleClick}
    >
      <i className="fi-user" />
      <span itemProp="name">Вход</span>
    </Button>
  );
}

export default LoginButton;
