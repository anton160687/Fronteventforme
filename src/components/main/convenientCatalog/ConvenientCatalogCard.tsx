import Link from 'next/link';
import styles from '@/styles/main/ConvenientCatalog.module.scss';

type cardProps = {
  card: {
    title: string;
    description: string;
    nameImg: string;
    color: string;
    path: string;
  }
};

function ConCatCard({ card }: cardProps) {
  let { title, description, nameImg, color, path } = card;
  return (
    <Link href={path} className={styles.concat__link}>
      <div className={styles.concat__card}>
        <i className={`${nameImg} text-${color} fs-2`}></i>
        <h3>{title}</h3>
        <p className={styles.concat__description}>{description}</p>
      </div>
    </Link>
  )
};

export default ConCatCard;
