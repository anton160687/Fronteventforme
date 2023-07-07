import { Card, Row } from 'react-bootstrap';
import { cards } from '@/mocks/cards';
import WeddingPhotos from './WeddingPhotos';
import styles from '@/styles/catalog/places/Places.module.scss';

function WeddingPhotosContainer() {
  const { weddingPhotos } = cards || {};
  return (
    <Row className={styles.mb40}>
      <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2">
        Фото проведенных свадеб на площадке
      </Card.Title>
      <div className="d-flex justify-content-evenly">
        {weddingPhotos &&
          weddingPhotos.map((item) => (
            <WeddingPhotos
              key={item.id}
              title={item.title}
              description={item.description}
              pathImg={item.pathImg}
            />
          ))}
      </div>
    </Row>
  );
}

export default WeddingPhotosContainer;
