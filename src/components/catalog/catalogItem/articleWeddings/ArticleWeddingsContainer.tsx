import { Card, Row } from 'react-bootstrap';
import { cards } from '@/mocks/cards';
import ArticleWeddings from './ArticleWeddings';
import styles from '@/styles/catalog/places/Places.module.scss';

function ArticleWeddingsContainer() {
  const { articles } = cards || {};

  return (
    <Row className={'justify-content-between' + styles.mb40}>
      <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2 w-100">
        Статьи о свадьбах на площадке “Villa Arcobaleno”
      </Card.Title>
      <div className="d-flex justify-content-center justify-content-md-evenly flex-wrap">
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
