import ProgressBar from 'react-bootstrap/ProgressBar';
import RatingStars from '../ratingStars/RatingStar';
import { Row, Col } from 'react-bootstrap';
import { PlaceReceived } from '@/types/placeType';
import LocalReviews from '@/components/catalog/catalogItem/localReviews/LocalReviews';

const RatingSections = [
  { id: 1, key: '', title: 'Интерьер', rating: 4.8 },
  { id: 2, key: '', title: 'Комфорт', rating: 3.8 },
  { id: 3, key: '', title: 'Размещение', rating: 3.4 },
  { id: 4, key: '', title: 'Кухня', rating: 2.9 },
  { id: 5, key: '', title: 'Обслуживание', rating: 5.0 },
  { id: 6, key: '', title: 'Чистота', rating: 4.8 },
  { id: 7, key: '', title: 'Цена/качество', rating: 4.8 },
];


type LocalRatingProps = {
    place: PlaceReceived;
};


function LocalRating({ place }: LocalRatingProps) {
  function renderRating() {
    return RatingSections.map(({ id, title, rating }) => (
      <Row key={id} className="mb-2 fs-sm">
        <Col xs={6} sm={3} lg={2} className="text-nowrap">
          {title}
        </Col>
        <Col sm={8} lg={9} className="order-sm-1 order-2">
          <ProgressBar variant="warning" now={rating * 20} label="" />
        </Col>
        <Col
          xs={6}
          sm={1}
          className="order-sm-2 order-1 text-end text-sm-start"
        >
          {rating}
        </Col>
      </Row>
    ));
  }

  return (
      <section className="w-100 mb-4">
          <h2 className='fs-4'>Отзывы</h2>
      <Row>
        <Col sm={12} md={10} className="order-md-1 order-2">
          {renderRating()}
        </Col>
        <Col
          sm={12}
          md={2}
          className="order-md-2 order-1 mb-md-0 mb-3 text-center"
        >
          <RatingStars rating={4.9} voices={38} />
        </Col>
          </Row>
      <LocalReviews id={place.id} />
    </section>
  );
}

export default LocalRating;
