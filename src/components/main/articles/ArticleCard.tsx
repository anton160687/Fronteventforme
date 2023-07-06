import Image from 'next/image';
import styles from '@/styles/main/Main.module.scss';

type ArticleCardProps = {
  src: string;
  isBig: boolean;
};

function ArticleCard({ src, isBig }: ArticleCardProps) {
  return (
    <figure className={`${isBig? styles.article__card_big : styles.article__card_sm} card card-hover border-0 ${isBig? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"}`}>
      <Image
        src={src}
        className="rounded-2 mb-3"
        alt="card image"
        width={isBig? 663: 306}
        height={324}
      />
      <figcaption className="card-body p-0 col-auto">
        <p className={`${styles.article__category} card-text text-primary`}>подпись</p>
        <h4 className={`${styles.article__title} card-title`}>
          {isBig? "Длинное название статьи из шести слов": "Название статьи из пяти слов" }
        </h4>
      </figcaption>

      <div className='d-flex align-items-end'>
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
      </div>

    </figure>
  );
};


export default ArticleCard;