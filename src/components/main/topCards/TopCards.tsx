import { cards } from '@/mocks/cards';
import {  Col, Row } from 'react-bootstrap';
import TopCard from './TopCard';
import styles from '@/styles/main/Main.module.scss';


function TopCards () {
  const { cardsLinkArrey } = cards || {};
  return (
    <section className={styles.my124}>
      <Row>
        <Col sm={12} className="text-center">
          <p className="mb-3">Портал EventForMe</p>
          <h1 className="mb-4">
            Сайт, в котором есть всё необходимое
            <br />
            для планирования свадьбы{' '}
          </h1>
        </Col>
      </Row>
      <Row>
        <h2 className='d-none'>Возможности EventForMe</h2>
        {cardsLinkArrey &&
          cardsLinkArrey.map((item) => (
            <TopCard
              key={item.id}
              title={item.title}
              description={item.description}
              pathImg={item.pathImg}
            />
          ))}
      </Row>
    </section>
  );
};

export default TopCards;