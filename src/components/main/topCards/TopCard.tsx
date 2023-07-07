import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/main/Main.module.scss';

type TopCardProps = {
  title: string;
  description: string;
  pathImg: string;
};

function TopCard({ title, description, pathImg }: TopCardProps) {
  return (
    <Link
      href="#"
      className="card text-decoration-none card-hover border-0 align-items-center col-lg-4 col-md-6 col-sm-12 mt-4"
      style={{ padding: "12px" }}
    >
      <div className="card-body p-0 col-lg-12 col-md-10 col-sm-8">
        <h3 className="card-title mb-3">{title}</h3>
        <p className={`${styles.topcard__description} card-text mb-4`}>
          {description}
        </p>
      </div>
      <Image
        src={pathImg}
        className="rounded-2"
        alt="card image"
        width={416}
        height={415}
      />
    </Link>
  )
}

export default TopCard;