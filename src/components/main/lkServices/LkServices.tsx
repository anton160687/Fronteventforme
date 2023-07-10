
import ImageLoader from '@/components/_finder/ImageLoader';
import { Col, Row, Card } from 'react-bootstrap';
import RegisterBtn from '@/components/main/registerBtn/registerBtn';
import styles from '@/styles/main/Main.module.scss';
import { steps } from '@/mocks/moreServices';


function LkServices(): JSX.Element {
  return (
    <section className={styles.my124}>
      <h2 className="d-none">О личном кабинете</h2>
      <Row>
        <Col className={`${styles.lkserv__col} col-lg-6 col-sm-12 col-12`}>
          <div className={styles.lkserv__description}>
            <h3 className={`${styles.main__description} m-0`}>
              Получите больше услуг в личном кабинете
            </h3>
            <p className={`${styles.lkserv__text} m-0`}>
              Elementum magna ac tempor, facilisis tristique mauris. Et
              penatibus sit sed in ante in ultrices. Senectus aliquam dictum
              eleifend mi pharetra morbi.
            </p>
            <RegisterBtn />
          </div>
        </Col>
        <Col className="col-lg-6 col-sm-12">
          <ImageLoader
            src="/img/group.png"
            width={701}
            height={380.41}
            alt="Три человека на фоне карты под лупой"
          />
        </Col>
      </Row>
      <Row className="row mt-3 m-0">
        {steps.map((step, index) => (
          <Card
            className="card-hover border-0 col-lg-3 col-md-6 col-12 mr-md-1 text-center text-sm-start"
            key={index}
          >
            <Card.Body>
              <h4 className="text-info">0{index + 1}</h4>
              <h5 className={styles.lkserv__title}>{step.title}</h5>
              <p className={`${styles.lkserv__text} m-0`}>{step.description}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </section>
  );
}

export default LkServices;
