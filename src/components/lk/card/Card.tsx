import ImageLoader from '@/components/_finder/ImageLoader';
import { PlaceCardType } from '@/types/catalog';
import Link from 'next/link';
import { Button, Card, Dropdown } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';
import { numberOfAreas } from '@/services/parse.service';
import { useState } from 'react';

type LKCardProps = {
  card: PlaceCardType;
  isWishList: boolean;
  deleteCard: (id: number) => void;
};

const publishedContextMenu = [
  { icon: 'fi-edit', title: 'Редактировать', value: 'edit' },
  { icon: 'fi-flame', title: 'Продвигать', value: 'promote' },
  { icon: 'fi-trash', title: 'Удалить', value: 'delete' },
];

function LKCard({ card, isWishList, deleteCard }: LKCardProps) {
  //SelectCallback
  const handleSelect = (eventKey: string) => {
    console.log('eventKey', eventKey);

    if (eventKey === 'delete') {
      deleteCard(card.id);
    }
  };

  function renderCardText(title: string, description: string) {
    return (
      <Card.Text className="d-flex align-items-center justify-content-between fs-6">
        <span className="m-0 fs-sm">{title}</span>
        <span className="m-0 text-end fs-xs">
          <strong>{description}</strong>
        </span>
      </Card.Text>
    );
  }

  const contextMenuRender = () => {
    return (
      <div className="align-self-center ms-auto">
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle
            size="sm"
            variant="light btn-icon rounded-circle shadow-sm"
          >
            <i className="fi-dots-vertical"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="pb-3 my-1">
            {publishedContextMenu.map((item, index) => (
              <Dropdown.Item key={index} eventKey={item.value}>
                <i className={`${item.icon} fs-lg opacity-60 me-2`}></i>
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <Card className="card-horizontal card-hover my-5">
      <Link href={`/catalog/places/${card.id}`} className="card-img-top">
        <ImageLoader
          src={
            card.cover_place ||
            card.images_place[0]?.image ||
            'http://placekitten.com/200/300'
          }
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
            href={`/catalog/places/${card.id}`}
            className="m-0 text-decoration-none fs-base"
          >
            <h5>{card.title}</h5>
          </Link>
          {isWishList ? (
            <Button
              className={`${styles.heart__icon} btn btn-icon btn-light btn-xs rounded-circle shadow-sm`}
            >
              <i className="fi-heart"></i>
            </Button>
          ) : (
            contextMenuRender()
          )}
        </Card.Title>

        {card.areas.length !== 0 &&
          renderCardText(
            'Вместимость',
            `${card.areas[0].min_capacity} - ${card.areas[0].max_capacity} человек`
          )}

        {card.areas.length !== 0 &&
          renderCardText(
            'Стоимость',
            `Аренда ${card.areas[0].min_price_rent} ₽ + от ${card.areas[0].min_price_banquet} ₽/ч`
          )}

        {card.areas.length !== 0 &&
          renderCardText('Схема оплаты', 'За аренду зала + за банкет')}

        <hr className="text-secondary" />
        <Card.Footer className="d-flex align-items-center justify-content-evenly px-0 text-center">
          <span>
            {card.areas.length} {numberOfAreas(card.areas.length)}
          </span>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default LKCard;
