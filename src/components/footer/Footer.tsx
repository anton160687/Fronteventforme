import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import SocialButton from '../_finder/SocialButton';
import { SERVICES, PLACES, PAGES, ACTORS, FooterType } from '@/constant';
import styles from '@/styles/footer/Footer.module.scss';
import Button from 'react-bootstrap/Button';

export default function Footer() {

  function renderRow(rowData: FooterType, button: boolean): JSX.Element {
    return (
      <div className={styles.footer_row + ' mb-sm-0 mb-4'}>
        <h4 className='h5'>{rowData.title}</h4>
        <Nav className='flex-column'>
          {
            rowData.data.map((item) => (
              <Nav.Item className='mb-2' key={item.id}>
                <Nav.Link as={Link} href={item.url} active={false} className='p-0 fw-normal'>{item.name}</Nav.Link>
              </Nav.Item>
            ))
          }
          {button &&
            <Nav.Link className={styles.footer__catalog_btn} as={Link} href='#' active={false}>
              <Button>Хочу быть в каталоге</Button>
            </Nav.Link>}
        </Nav>
      </div>
    )
  }

  return (
    <footer className='footer bg-secondary pt-5'>
      <Container className='pt-lg-4 pb-4'>

        <div className='d-flex flex-sm-row flex-column justify-content-between mx-n2'>

          {/* Logo + contacts */}
          <div className='mb-sm-0 mb-4 px-2'>

            <Link href='/' className='d-inline-flex mb-4'>
              <Image src='/img/header/logo.png' width={143} height={33} alt='EventForME' />
            </Link>

            <Nav className='flex-column mb-sm-4 mb-2'>

              <Nav.Item className='mb-2'>
                <Nav.Link href='mailto:example@email.com' active={false} className='p-0 fw-normal'>
                  <i className='fi-mail me-2 align-middle opacity-70'></i>
                  example@email.com
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='tel:4065550120' active={false} className='p-0 fw-normal'>
                  <i className='fi-device-mobile me-2 align-middle opacity-70'></i>
                  (406) 555-0120
                </Nav.Link>
              </Nav.Item>

            </Nav>

            <div className='pt-2'>
              <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2 mb-2' size='' light='' />
              <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='me-2 mb-2' size='' light='' />
              <SocialButton href='#' variant='solid' brand='viber' roundedCircle className='me-2 mb-2' size='' light='' />
              <SocialButton href='#' variant='solid' brand='telegram' roundedCircle className='mb-2' size='' light='' />
            </div>
          </div>

          <div className={styles.footer_rows}>
            {renderRow(SERVICES, false)}

            {renderRow(PAGES, false)}

            {renderRow(PLACES, false)}

            {renderRow(ACTORS, true)}
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footer_copyright}>
          <p>© EventForMe</p> 
          <Link href='#'>Условия использования</Link>
          <Link href='#'>Политика конфиденциальности</Link>
        </div>
      </Container>
    </footer>
  )
}