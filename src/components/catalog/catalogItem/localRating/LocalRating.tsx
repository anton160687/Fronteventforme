import ProgressBar from 'react-bootstrap/ProgressBar';
import RatingStars from '../ratingStars/RatingStar';
import { Row, Col } from 'react-bootstrap';

const RatingSections = [
  { id: 1, key: '', title: 'Интерьер', rating: 4.8 },
  { id: 2, key: '', title: 'Комфорт', rating: 3.8 },
  { id: 3, key: '', title: 'Размещение', rating: 3.4 },
  { id: 4, key: '', title: 'Кухня', rating: 2.9 },
  { id: 5, key: '', title: 'Обслуживание', rating: 5.0 },
  { id: 6, key: '', title: 'Чистота', rating: 4.8 },
  { id: 7, key: '', title: 'Цена/качество', rating: 4.8 },
]

function LocalRating() {
  function renderRating() {
    return RatingSections.map(({ id, key, title, rating }) => (
      <Row key={id} className='mb-2'>
        <Col className='col-2'>{title}</Col>
        <Col className='col-9'>
          <ProgressBar variant='warning' now={rating * 20} label='' />
        </Col>
        <Col className='col-1'>{rating}</Col>
      </Row>
    ))
  }

  return (
    <section className='w-100'>
      <Row>
        <Col className='col-10'>
          {renderRating()}
        </Col>
        <Col className='col-2'>
          <RatingStars rating={4.9} voices={38} />
        </Col>
      </Row>
    </section>
  )
};

export default LocalRating;