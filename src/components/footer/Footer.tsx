import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import SocialButton from '../_finder/SocialButton';
import { SERVICES, PLACES, PAGES, ACTORS, FooterType, Paths } from '@/constant';
import styles from '@/styles/footer/Footer.module.scss';
import { Col, Row } from 'react-bootstrap';

const socialMedia = [
  { id: 1, name: "facebook", path: "#" },
  { id: 2, name: "twitter", path: "#" },
  { id: 3, name: "viber", path: "#" },
  { id: 4, name: "telegram", path: "#" },
]

function Footer() {
  function renderSocialBtn() {
    return socialMedia.map(({ id, name, path }) => (
      <li>
        <SocialButton
          href={path}
          variant="solid"
          brand={name}
          roundedCircle
          className="me-2 mb-2"
          size=""
          light=""
        />
      </li>
    ))
  }

  function renderRow(rowData: FooterType, button: boolean) {
    return (
      <Nav className={`${styles.footer__column} col`}>
        <h2 className={styles.footer__column_title}>{rowData.title}</h2>
        <ul>
          {rowData.data.map((item) => (
            <li className="mb-2" key={item.id}>
              <Link href={item.url} className="nav-link p-0 fw-normal">
                {item.name}
              </Link>
            </li>
          ))}
          {button &&
            <li>
              <Button
              // @ts-ignore: bootstrap bag*
                as={Link}
                href={Paths.AddChoicePage}
                className="d-flex mx-auto me-md-0">
                Хочу быть в каталоге
              </Button>
            </li>
          }
        </ul>
      </Nav>
    );
  }

  return (
    <footer className="footer bg-secondary mt-5">
      <Container className={styles.footer__container}>
        <section id="footer_logo" className={`${styles.footer__logo} mb-4`}>
          <Link href="/" className="d-block mb-4" >
            <Image
              src="/img/header/logo.svg"
              width={143}
              height={33}
              alt="EventForMe"
              title="Компания EventForMe"
            />
          </Link>
          <ul className={styles.footer__contacts}>
            <li>
              <Link
                href="mailto:example@email.com"
                className="p-0 fw-normal nav-link"
              >
                <i className="fi-mail me-2 align-middle opacity-70"></i>
                example@email.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:4065550120"
                className="p-0 fw-normal nav-link"
              >
                <i className="fi-device-mobile me-2 align-middle opacity-70"></i>
                (406) 555-0120
              </Link>
            </li>
            <li className="pt-4">
              <ul className={styles.footer__social}>
                {renderSocialBtn()}
              </ul>
            </li>
          </ul>
        </section>

        <Row className="m-0">

          {renderRow(SERVICES, false)}

          {renderRow(PAGES, false)}

          {renderRow(PLACES, false)}

          {renderRow(ACTORS, true)}

        </Row>

        {/* Copyright */}
        <div id="footer_copyright" className={styles.footer__copyright}>
          <section>© EventForMe</section>
          <nav>
            <ul className={styles.footer__conditions} >
              <li><Link href="#" className={styles.footer__conditions_link}>Условия пользования</Link></li>
              <li><Link href="#" className={styles.footer__conditions_link}>Политика конфиденциальности</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;