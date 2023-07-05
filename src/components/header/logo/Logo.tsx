import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/header/Header.module.scss';

function Logo() {
  return (
    <section
      className={`${styles.header__logo}`}
      itemScope
      itemType="http://schema.org/Organization"
      itemID="https://eventforme.ru"
    >
      <meta itemProp="name" content="EventForMe" />
      <meta itemProp="address" content="Москва, Ленингадский проспект дом 39, стр. 14" />
      <meta itemProp="email" content="mailto:info@eventforme.ru" />
      <meta itemProp="telephone" content="tel:4065550120" />
      <Link href="https://eventforme.ru" className="d-block" itemProp="url">
        <Image
          className={styles.header__logo_img}
          src="/img/header/logo.svg"
          width={143}
          height={33}
          alt="EventForMe"
          title="Компания EventForMe"
          itemProp="logo"
        />
      </Link>
    </section>
  )
}

export default Logo;