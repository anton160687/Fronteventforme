import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import styles from '@/styles/header/Login.module.scss';
import Link from 'next/link';
import { PATHS } from '@/constant';

function Login() {
  return (
    <Nav.Item className={styles.login}>
      <Link
        href={PATHS.signIn}
        style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}
      >
        <Image
          src="/img/header/user.svg"
          width={9}
          height={13}
          alt="login"
          className="fs-lg me-1"
        />
        Вход
      </Link>
    </Nav.Item>
  );
}

export default Login;
