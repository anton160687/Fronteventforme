import Link from 'next/link';
import { Button } from 'react-bootstrap';
import styles from './convenientCatalog.module.scss';

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
    <Link href={path}>
      <div>
        <i className={`${nameImg} text-${color} fs-3`}></i>
        <h3 className="fs-base mt-5 mb-2">{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
};

export default ConCatCard;
