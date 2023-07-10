import { Row } from 'react-bootstrap';
import { cards } from '@/mocks/cards';
import ArticleWeddings from './ArticleWeddings';
import styles from '@/styles/catalog/places/Places.module.scss';

function ArticleWeddingsContainer() {
  const { articles } = cards || {};

  return (
    <Row className={'justify-content-between ' + styles.mb40}>
      <h2 className="mb-4 fs-4">Статьи о свадьбах на площадке “Villa Arcobaleno”</h2>
      <div
        className="d-flex flex-wrap flex-md-nowrap"
        style={{ gap: '1.5rem' }}
      >
        {articles &&
          articles.map((item) => (
            <ArticleWeddings
              key={item.id}
              title={item.title}
              description={item.description}
              pathImg={item.pathImg}
              dateText={item.dateText}
            />
          ))}
      </div>
    </Row>
  );
}

export default ArticleWeddingsContainer;
