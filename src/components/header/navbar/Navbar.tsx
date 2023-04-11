import Link from 'next/link';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import City from '../city/city';
import RegButton from '../regButton/regButton';
import Login from '../login/Login';
import Search from '../search/Search';
import styles from '@/styles/header/Navbar.module.scss';
import Avatar from '../avatar/Avatar';

type HeaderNavbarProps = {
    isAuth: boolean,
}

function HeaderNavbar({ isAuth }: HeaderNavbarProps) {
    const { pathname } = useRouter();
    const navigation = [
        {
            id: 1,
            path: '#',
            text: 'Свадебные\u00A0сайты'
        },
        {
            id: 2,
            path: '#',
            text: 'Хештеги'
        },
        {
            id: 3,
            path: '#',
            text: 'Приглашения'
        },
        {
            id: 4,
            path: '#',
            text: 'Блог'
        },
    ]

    function renderNavigation() {
        return navigation.map(({ id, path, text }) => (
            <Nav.Item key={id}>
                <Nav.Link as={Link} href={path}>{text}</Nav.Link>
            </Nav.Item>
        ))
    }

    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand as={Link} href='/' className='me-2 me-xl-4'>
                    <Image className={styles.logo} src='/img/header/logo.png' width={143} height={33} alt='EventForME' />
                </Navbar.Brand>

                {/* Меню для мобильных устройств */}
                <Navbar.Toggle aria-controls='light-navbar-nav' className='ms-auto' />

                <Navbar.Collapse id='light-navbar-nav' className='order-lg-2'>
                    <Nav>
                        <City />

                        <CatalogDropDown />

                        {renderNavigation()}

                        {!isAuth &&<Login />}
                        {!isAuth &&<RegButton />}

                        {/* {isAuth && <Search />} */}
                        {isAuth && <Avatar role={'bride'} first_name={'Имя'} second_name={'Фамилия'} avatar={''}/>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar;