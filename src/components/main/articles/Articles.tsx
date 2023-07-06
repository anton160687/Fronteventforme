import Image from 'next/image';
import { Row } from 'react-bootstrap';
import { MainTitle } from '../title/MainTitle';
import styles from '@/styles/main/Main.module.scss';
import Link from 'next/link';
import ArticleCard from './ArticleCard';

function Articles() {
  return (
    <section>
      <MainTitle
        subtitle={'Индивидуальный подход'}
        title={'Персонализированные услуги и статьи под любой запрос'}
      />
      <div className="d-sm-flex align-items-baseline justify-content-between mb-3">
        <h3 className={`${styles.main__description} mb-sm-0`}>
          Статьи <span className={styles.hide}>от свадебных экспертов </span>и реальные свадьбы
        </h3>
        <Link href="#" className={styles.main__description_link}>
          Перейти в блог
          <i className="fi-arrow-long-right ms-2"></i>
        </Link>
      </div>

      <Row className={`${styles.articles__row} mb-4 justify-content-center justify-content-lg-start`}>
        <ArticleCard src="/img/card/cardsPersonServices/hands.png" isBig={false} />
        <ArticleCard src="/img/card/cardsPersonServices/sky.png" isBig={true} />
        <ArticleCard src="/img/card/cardsPersonServices/flowers.png" isBig={false} />
      </Row>

      <Row className={`${styles.articles__row} mb-4 justify-content-center justify-content-lg-start`}>
        <ArticleCard src="/img/card/cardsPersonServices/sky.png" isBig={true} />
        <ArticleCard src="/img/card/cardsPersonServices/hands.png" isBig={false} />
        <ArticleCard src="/img/card/cardsPersonServices/flowers.png" isBig={false} />
      </Row>
    </section>
  );
};

export default Articles;