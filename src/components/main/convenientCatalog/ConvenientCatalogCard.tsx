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
    <div className={styles.concat__card}>
      <Link href={path} className={styles.concat__link}>
        <i className={`${nameImg} text-${color} fs-3`}></i>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </Link>
    </div>
  )
};

export default ConCatCard;