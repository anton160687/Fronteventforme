import Image from "next/image";
import Nav from 'react-bootstrap/Nav';
import styles from '@/styles/header/Login.module.scss';

function Login () {
    return (
        <Nav.Item className={styles.login}>
            <Image src='/img/header/user.svg' width={9} height={13} alt="login"/>
            Вход
        </Nav.Item>
    )
};

export default Login;