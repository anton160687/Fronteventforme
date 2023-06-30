import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SocialButton from '../_finder/SocialButton';
import { SERVICES, PLACES, PAGES, ACTORS, FooterType, Paths } from '@/constant';
import styles from '@/styles/footer/Footer.module.scss';
import { Col, Row } from 'react-bootstrap';

const socialMedia = [
  { id: 1, name: "whatsapp", path: "https://api.whatsapp.com/message/OGH2HQRF5EYHM1?autoload=1&app_absent=0" },
  { id: 2, name: "pinterest", path: "https://ru.pinterest.com/eventformeru/" },
  { id: 3, name: "vk", path: "https://vk.com/msk_eventforme" },
  { id: 4, name: "telegram", path: "https://t.me/event_for_me" },
]

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
    ))
  }

  function renderСol(column: FooterType) {
    return (
      <nav
        id={`footerNavCol${column.id}`}
        className={styles.footer__column_nav}
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        itemID={`/#footerNavCol${column.id}`}
      >
        <h2 className={styles.footer__column_title} itemProp="name">{column.title}</h2>
        <ul className={styles.footer__column_list} itemProp="about" itemScope itemType="http://schema.org/ItemList">
          {column.data.map(({ id, url, name }) => (
            <li className="mb-2" key={id} itemProp="itemListElement" itemScope itemType="http://schema.org/ItemList">
              <Link href={url} className={`${styles.footer__navlink} nav-link p-0 fw-normal`} itemProp="url">
                <span itemProp="name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <footer id="footer"
      className="footer bg-secondary mt-5"
      itemScope
      itemType="http://schema.org/WPFooter"
      itemID="/#footer"
    >
      <Container className={styles.footer__container}>
        <Row className={styles.footer__row}>
          <Col className={styles.footer__column}>
            <section
              className={`${styles.footer__logo} mb-4`}
              itemScope
              itemType="http://schema.org/Organization"
              itemID="https://eventforme.ru"
            >
              <meta itemProp="name" content="EventForMe" />
              <meta itemProp="address" content="Москва, Ленингадский проспект дом 39, стр. 14" />
              <Link href="https://eventforme.ru" className="d-block mb-4" itemProp="url">
                <Image
                  src="/img/header/logo.svg"
                  width={143}
                  height={33}
                  alt="EventForMe"
                  title="Компания EventForMe"
                  itemProp="logo"
                />
              </Link>
              <ul className={styles.footer__contacts}>
                <li>
                  <Link
                    href="mailto:info@eventforme.ru"
                    className="p-0 fw-normal nav-link"
                    itemProp="email"
                  >
                    <i className="fi-mail me-2 align-middle opacity-70"></i>info@eventforme.ru
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:4065550120"
                    className="p-0 fw-normal nav-link"
                    itemProp="telephone"
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
          </Col>
          <Col className={styles.footer__column}>
            {renderСol(SERVICES)}
          </Col>
          <Col className={styles.footer__column}>
            {renderСol(PAGES)}
          </Col>
          <Col className={styles.footer__column_last}>
            {renderСol(PLACES)}
          </Col>
          <Col className={styles.footer__column_last}>
            {renderСol(ACTORS)}
            <nav
              id="footerNavBtn"
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
              itemID={`/#footerNavBtn`}
            >
              <Button
                // @ts-ignore: bootstrap bag*
                as={Link}
                href={Paths.AddChoicePage}
                className={styles.footer__catalog_btn}
                itemProp="url"
              >
                <span itemProp="name">Хочу в каталог</span>
              </Button>
            </nav>
          </Col>
        </Row>
        {/* Copyright */}
        <Row id="footer_copyright" className={styles.footer__copyright}>
          <section>©<span itemProp="copyrightHolder">EventForMe</span>, <span itemProp="copyrightYear">2023</span></section>
          <nav className={styles.footer__conditions}
            id="footerNavConditions"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            itemID="/#footerNavConditions"
          >
            <ul className={styles.footer__conditions_list} itemProp="about" itemScope itemType="http://schema.org/ItemList">
              <li itemProp="itemListElement" itemScope itemType="http://schema.org/ItemList">
                <Link href="#" className={styles.footer__conditions_link} itemProp="url"><span itemProp="name">Условия пользования</span></Link>
              </li>
              <li itemProp="itemListElement" itemScope itemType="http://schema.org/ItemList">
                <Link href="#" className={styles.footer__conditions_link} itemProp="url"><span itemProp="name">Политика конфиденциальности</span></Link>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;