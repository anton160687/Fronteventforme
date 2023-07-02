import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SocialButton from '../_finder/SocialButton';
import { SERVICES, PLACES, PAGES, ACTORS, FooterType, Paths } from '@/constant';
import styles from '@/styles/footer/Footer.module.scss';
import { Col, Row } from 'react-bootstrap';

const socialMedia = [
  {
    id: 1,
    name: 'whatsapp',
    path: 'https://api.whatsapp.com/message/OGH2HQRF5EYHM1?autoload=1&app_absent=0',
  },
  { id: 2, name: 'pinterest', path: 'https://ru.pinterest.com/eventformeru/' },
  { id: 3, name: 'vk', path: 'https://vk.com/msk_eventforme' },
  { id: 4, name: 'telegram', path: 'https://t.me/event_for_me' },
];

function Footer() {
  function renderSocialBtn() {
    return socialMedia.map(({ id, name, path }) => (
      <li key={id}>
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
    ));
  }

  function renderСol(column: FooterType) {
    return (
      <nav className={styles.footer__column_nav}>
        <h2 className={styles.footer__column_title}>{column.title}</h2>
        <ul className={styles.footer__column_list}>
          {column.data.map(({ id, url, name }) => (
            <li className="mb-2" key={id}>
              <Link
                href={url}
                className={`${styles.footer__navlink} nav-link p-0 fw-normal`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <footer className="footer bg-secondary mt-5">
      <Container className={styles.footer__container + ' px-5'}>
        <Row className={styles.footer__row}>
          <Col className={styles.footer__column}>
            <section id="footer_logo" className={`${styles.footer__logo} mb-4`}>
              <Link href="/" className="d-block mb-4">
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
                    href="mailto:info@eventforme.ru"
                    className="p-0 fw-normal nav-link"
                  >
                    <i className="fi-mail me-2 align-middle opacity-70"></i>
                    info@eventforme.ru
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
                  <ul className={styles.footer__social}>{renderSocialBtn()}</ul>
                </li>
              </ul>
            </section>
          </Col>
          <Col className={styles.footer__column}>{renderСol(SERVICES)}</Col>
          <Col className={styles.footer__column}>{renderСol(PAGES)}</Col>
          <Col className={styles.footer__column_last}>{renderСol(PLACES)}</Col>
          <Col className={styles.footer__column_last}>
            {renderСol(ACTORS)}
            <nav className={styles.footer__catalog_btncontainer}>
              <Button
                // @ts-ignore: bootstrap bag*
                as={Link}
                href={Paths.AddChoicePage}
                className={styles.footer__catalog_btn}
              >
                Хочу в каталог
              </Button>
            </nav>
          </Col>
        </Row>
        {/* Copyright */}
        <Row id="footer_copyright" className={styles.footer__copyright}>
          <section>© EventForMe, 2023</section>
          <nav className={styles.footer__conditions}>
            <ul className={styles.footer__conditions_list}>
              <li>
                <Link
                  href={Paths.TermsOfUse}
                  className={styles.footer__conditions_link}
                >
                  Условия пользования
                </Link>
              </li>
              <li>
                <Link
                  href={Paths.PrivacyPolicy}
                  className={styles.footer__conditions_link}
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
