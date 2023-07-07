import ImageLoader from '@/components/_finder/ImageLoader';
import { PlaceCardType } from '@/types/catalog';
import Link from 'next/link';
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { numberOfAreas } from '@/services/parse.service';
import { useState } from 'react';
import DeleteModal from '../deleteModal/DeleteModal';
import { ContextMenuTypeEnum } from '@/constant';
import ContextMenu from './contextMenu/ContextMenu';
import styles from '@/styles/lk/Lk.module.scss';

type LKCardProps = {
  card: PlaceCardType;
  deleteCard?: (id: number) => void;
  contextMenu?: string;
};

//!копия PlaceCard с некоторыми изменениями
function LKCard({
  card,
  deleteCard,
  contextMenu = ContextMenuTypeEnum.Base,
}: LKCardProps): JSX.Element {
  //Modal
  const [show, setShow] = useState<boolean>(false);

  function renderCardText(title: string, description: string) {
    return (
      <Card.Text className="d-flex align-items-center justify-content-between">
        <span className={'m-0 ' + styles.card__subtitle}>{title}</span>
        <span className={'m-0 text-end fs-sm ' + styles.card__text}>
          <strong>{description}</strong>
        </span>
      </Card.Text>
    );
  }

  return (
    <>
      <Card className="card-horizontal card-hover my-4">
        <Link
          href={`/catalog/places/${card.id}`}
          className="card-img-top"
          style={{ minHeight: '16rem' }}
        >
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
              <h5 className={styles.card__title}>{card.title}</h5>
            </Link>
            {contextMenu === ContextMenuTypeEnum.Wishlist ||
            contextMenu === ContextMenuTypeEnum.Base ? (
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip>
                    {contextMenu === ContextMenuTypeEnum.Wishlist
                      ? 'Убрать из Избранного'
                      : 'Добавить в Избранное'}
                  </Tooltip>
                }
              >
                <Button className="text-primary btn btn-icon btn-light btn-xs rounded-circle shadow-sm">
                  <i
                    className={`${
                      contextMenu === ContextMenuTypeEnum.Wishlist
                        ? 'fi-heart-filled'
                        : 'fi-heart'
                    }`}
                  ></i>
                </Button>
              </OverlayTrigger>
            ) : (
              <ContextMenu setShow={setShow} contextMenu={contextMenu} />
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
      {deleteCard && (
        <DeleteModal
          show={show}
          setShow={setShow}
          message={
            'Удаленный бизнес не будет виден на сайте и останется в вашем архиве.'
          }
          deleteFunc={() => deleteCard(card.id)}
        />
      )}
    </>
  );
}

export default LKCard;
