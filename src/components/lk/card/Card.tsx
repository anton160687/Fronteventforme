import ImageLoader from '@/components/_finder/ImageLoader';
import { PlaceCardType } from '@/types/catalog';
import Link from 'next/link';
import { Button, Card, Dropdown } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';
import { numberOfAreas } from '@/services/parse.service';
import { useState } from 'react';
import DeleteModal from '../modal/DeleteModal';
import { contextMenuTypeEnum } from '@/constant';

type LKCardProps = {
  card: PlaceCardType;
  deleteCard: (id: number) => void;
  contextMenu?: string;
};

type ContextMenuType = {
  icon: string;
  title: string;
  value: string;
};

const publishedContextMenu: ContextMenuType[] = [
  { icon: 'fi-edit', title: 'Редактировать', value: 'edit' },
  { icon: 'fi-flame', title: 'Продвигать', value: 'promote' },
  { icon: 'fi-trash', title: 'Удалить', value: 'delete' },
];

const draftContextMenu: ContextMenuType[] = [
  { icon: 'fi-edit', title: 'Редактировать', value: 'edit' },
  { icon: 'fi-trash', title: 'Удалить', value: 'delete' },
];

const archiveContextMenu: ContextMenuType[] = [
  { icon: 'fi-rotate-right', title: 'Восстановить', value: 'restore' },
];

//!копия PlaceCard с некоторыми изменениями, как договоримся с Евой - объединю с PlaceCard
function LKCard({
  card,
  deleteCard,
  contextMenu = contextMenuTypeEnum.Wishlist,
}: LKCardProps) {
  //Modal
  const [show, setShow] = useState<boolean>(false);

  //SelectCallback
  const handleSelect = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>
  ) => {
    console.log('eventKey', eventKey);

    if (eventKey === 'delete') {
      setShow(true);
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

  //context menu
  let menu: ContextMenuType[] = [];

  switch (contextMenu) {
    case contextMenuTypeEnum.Published:
      menu = publishedContextMenu;
      break;
    case contextMenuTypeEnum.Moderation:
      menu = publishedContextMenu;
      break;
    case contextMenuTypeEnum.Draft:
      menu = draftContextMenu;
      break;
    case contextMenuTypeEnum.Archive:
      menu = archiveContextMenu;
      break;
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
          <Dropdown.Menu align="end" className="pb-3">
            {menu.map((item, index) => (
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
    <>
      <Card className="card-horizontal card-hover my-4">
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
            alt={card.title}
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
            {contextMenu === contextMenuTypeEnum.Wishlist ? (
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
      {card.comment && (
        <>
          <h5>Комментарий модератора:</h5>
          <p>{card.comment}</p>
        </>
      )}
      <DeleteModal
        show={show}
        setShow={setShow}
        message={
          'Удаленный бизнес не будет виден на сайте и останется в вашем архиве.'
        }
        deleteFunc={() => deleteCard(card.id)}
      />
    </>
  );
}

export default LKCard;
