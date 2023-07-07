import Image from 'next/image';
import styles from '@/styles/main/Main.module.scss';
import Link from 'next/link';

type ArticleCardProps = {
  article: {
    id: number;
    src: string;
    path: string;
    isBig: boolean;
    title: string;
    category: string;
    categoryPath: string;
  }
};

function ArticleCard({ article }: ArticleCardProps) {
  const { id, src, path, isBig, title, category, categoryPath } = article;
  return (
    <article className={`${isBig ? styles.article__card_big : styles.article__card_sm} card card-hover border-0 ${isBig ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"}`}>
      <figure>
        <Link href={path} className="card-img-top overflow-hidden">
          <Image
            src={src}
            className="rounded-2 mb-3"
            alt="card image"
            width={isBig ? 663 : 306}
            height={324}
          />
        </Link>
        <figcaption className="card-body p-0 col-auto">
          <Link href={categoryPath} className="fs-xs text-uppercase text-decoration-none">{category}</Link>
          <h4 className={`${styles.article__title} card-title`}>
            <Link href={path} className="nav-link"> {title} </Link>
          </h4>
        </figcaption>
      </figure>
      <Link href={path} className="d-flex align-items-end text-decoration-none">
        <Image
          src="/img/card/cardsPersonServices/plug.png"
          className="rounded-circle me-3"
          alt="card image"
          width={64}
          height={64}
        />
        <div className={styles.article__pubinfo}>
          <p>Имя Фамилия</p>
          <span><i className="fi-calendar me-2"></i> 24 ноября</span>
        </div>
      </Link>

    </article >
  );
};


export default ArticleCard;