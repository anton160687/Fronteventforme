import Image from 'next/image';
import Link from 'next/link';
import { Paths } from '@/constant';
import styles from '@/styles/header/Header.module.scss';

function Logo () {
  return (
    <section id="logo">
          <Link href={Paths.Home}>
          <Image
            className={`${styles.header__logo}`}
            src="/img/header/logo.png"
            width={143}
            height={33}
            alt="EventForMe"
            title="Компания EventForMe"
          />
          </Link>
        </section>
  )
}

export default Logo;