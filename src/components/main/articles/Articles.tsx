import { Row } from 'react-bootstrap';
import { MainTitle } from '../title/MainTitle';
import styles from '@/styles/main/Main.module.scss';
import Link from 'next/link';
import ArticleCard from './ArticleCard';

const articles = [
  {
    id: 1,
    src: "/img/card/cardsPersonServices/hands.png",
    path: "#",
    isBig: false,
    title: "Название статьи из пяти слов",
    category: "Кольца",
    categoryPath: "#",
  },
  {
    id: 2,
    src: "/img/card/cardsPersonServices/sky.png",
    path: "#",
    isBig: true,
    title: "Длинное название статьи из шести слов",
    category: "Площадки",
    categoryPath: "#",
  },
  {
    id: 1,
    src: "/img/card/cardsPersonServices/flowers.png",
    path: "#",
    isBig: false,
    title: "Название статьи из пяти слов",
    category: "Букеты",
    categoryPath: "#",
  },
]
function Articles() {
  return (
    <section className={styles.my124}>
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
        <ArticleCard article={articles[0]} />
        <ArticleCard article={articles[1]} />
        <ArticleCard article={articles[2]} />
      </Row>

      <Row className={`${styles.articles__row} mb-4 justify-content-center justify-content-lg-start`}>
        <ArticleCard article={articles[1]} />
        <ArticleCard article={articles[0]} />
        <ArticleCard article={articles[2]} />
      </Row>
    </section>
  );
};

export default Articles;