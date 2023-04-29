import Image from 'next/image';
import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { CardName, CardRepetition } from './cards';
import { MainTitle } from '../title/title';
import styles from '@/styles/main/Main.module.scss';

export const PersonServices: FC = () => {
  return (
    <Container
      as="section"
      className={'mx-auto w-75 pt-2 pt-sm-0 pb-md-2 ' + styles.my124}
    >
      <MainTitle
        suptitle={'Индивидуальный подход'}
        title={'Персонализированные услуги и статьи под любой запрос'}
      />
      <Row className="mb-3">
        <h2 className="col-lg-12 col-xl-9 text-center">
          Статьи от свадебных экспертов и реальные свадьбы
        </h2>
        <button
          type="button"
          className="btn btn-outline-secondary rounded-pill border-0 p-0 col-lg-12 col-xl-3"
        >
          Перейти в блог<i className="fi-arrow-long-right m-2"></i>
        </button>
      </Row>
      <Row className="mb-4">
        <CardRepetition src="/img/card/cardsPersonServices/hands.png" />

        <figure className="card card-hover border-0 align-items-center col-lg-6 col-md-12 col-sm-12">
          <Image
            src="/img/card/cardsPersonServices/sky.png"
            className="rounded-2 mb-3"
            alt="card image"
            width={663}
            height={324}
          />
          <figcaption className="card-body p-0 col-lg-12 col-md-8 col-sm-11">
            <p className="card-text text-primary">подпись</p>
            <h6 className="card-title">
              Длинное название статьи из шести слов
            </h6>
          </figcaption>
          <CardName />
        </figure>

        <CardRepetition src="/img/card/cardsPersonServices/flowers.png" />
      </Row>
      <Row className="mb-4">
        <figure className="card card-hover border-0 align-items-center col-lg-6 col-md-12 col-sm-12">
          <Image
            src="/img/card/cardsPersonServices/sky.png"
            className="rounded-2 mb-3"
            alt="card image"
            width={663}
            height={324}
          />
          <figcaption className="card-body p-0 col-lg-12 col-md-8 col-sm-11">
            <p className="card-text text-primary">подпись</p>
            <h6 className="card-title">
              Длинное название статьи из шести слов
            </h6>
          </figcaption>
          <CardName />
        </figure>

        <CardRepetition src="/img/card/cardsPersonServices/hands.png" />
        <CardRepetition src="/img/card/cardsPersonServices/flowers.png" />
      </Row>
    </Container>
  );
};
