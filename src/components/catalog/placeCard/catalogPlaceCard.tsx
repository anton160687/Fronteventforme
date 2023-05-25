import { FC } from 'react';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import ImageLoader from '@/components/_finder/ImageLoader';
import styles from '@/styles/catalog/places/Places.module.scss';
import { Place } from '@/types/catalog';

type propsPlace = {
  place: Place;
};

const CatalogPlaceCard: FC<propsPlace> = ({ place }) => {
  return (
    <Card className="card-horizontal card-hover my-5">
      <Link href={`/catalog/places/${place.id}`} className="card-img-top">
        <ImageLoader
          src={place.image_vendor}
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="Card image"
        />
      </Link>
      <Card.Body className="py-0">
        <Card.Title
          className={`d-flex align-items-baseline justify-content-between my-4`}
        >
          <Link
            href={`/catalog/places/${place.id}`}
            className="m-0 text-decoration-none"
          >
            <h5>{place.title}</h5>
          </Link>
          <Button
            className={`${styles.heart__icon} btn btn-icon btn-light btn-xs rounded-circle shadow-sm`}
          >
            <i className="fi-heart"></i>
          </Button>
        </Card.Title>

        <CardText title={place.title} description={place.description} />
        <CardText
          title="Схема оплаты"
          description="За аренду зала + за банкет"
        />
        <CardText
          title="Стоимость"
          description="Аренда 10 000 ₽ + от 4 000 ₽/ч"
        />
        <hr className="text-secondary" />
        <Card.Footer className="d-flex align-items-center justify-content-evenly px-0 text-center">
          <span>3 банкетных зала</span>
          <span className="fs-4 text-secondary">|</span>
          <span>2 шатра</span>
          <span className="fs-4 text-secondary">|</span>
          <span>2 веранды</span>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

type cardTextType = {
  title: string;
  description: string;
};

const CardText: FC<cardTextType> = ({ title, description }) => (
  <Card.Text className="d-flex align-items-center justify-content-between fs-6">
    <span className="m-0">{title}</span>
    <span className="m-0 text-end">
      <strong>{description}</strong>
    </span>
  </Card.Text>
);

export default CatalogPlaceCard;
