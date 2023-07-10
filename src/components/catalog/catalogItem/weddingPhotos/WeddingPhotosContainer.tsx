import { Row } from 'react-bootstrap';
import { cards } from '@/mocks/cards';
import WeddingPhotos from './WeddingPhotos';
import styles from '@/styles/catalog/places/Places.module.scss';

function WeddingPhotosContainer() {
  const { weddingPhotos } = cards || {};
  return (
    <Row className={styles.mb40}>
      <h2 className="mb-4 fs-4">Фото проведенных свадеб на площадке</h2>
      <div
        className="d-flex justify-content-evenly flex-wrap flex-md-nowrap"
        style={{ gap: '1.5rem' }}
      >
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
