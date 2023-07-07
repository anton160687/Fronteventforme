
import ImageLoader from '@/components/_finder/ImageLoader';
import { Col, Row, Card } from 'react-bootstrap';
import RegisterBtn from '@/components/main/registerBtn/registerBtn';
import styles from '@/styles/main/Main.module.scss';
import { steps } from '@/mocks/moreServices';


function LkServices(): JSX.Element {
  return (
    <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>
      <Row>
        <Col className="col-lg-6 col-sm-12">
          <div className="w-75">
            <h2 className={styles.main__description}>
              Получите больше услуг в личном кабинете
            </h2>
            <p className={styles.more_services__description}>
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
            className="card-hover border-0 col-lg-3 col-12 col-md-6 mr-md-1 px-3 text-center text-sm-start"
            key={index}
          >
            <Card.Body>
              <h3 className="text-info">0{index + 1}</h3>
              <h4 className={styles.step__title}>{step.title}</h4>
              <p className={styles.step__description}>{step.description}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </section>
  );
}

export default LkServices;
