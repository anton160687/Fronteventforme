import ImageLoader from '@/components/_finder/ImageLoader';
import { PlaceCardType } from '@/types/catalog';
import Link from 'next/link';
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { numberOfAreas } from '@/services/parse.service';
import { useState } from 'react';
import DeleteModal from '../modal/DeleteModal';
import { contextMenuTypeEnum } from '@/constant';
import ContextMenu from './contextMenu/ContextMenu';

type LKCardProps = {
  card: PlaceCardType;
  deleteCard?: (id: number) => void;
  contextMenu?: string;
};

//!копия PlaceCard с некоторыми изменениями, как договоримся с Евой - объединю с PlaceCard
function LKCard({
  card,
  deleteCard,
  contextMenu = contextMenuTypeEnum.Base,
}: LKCardProps): JSX.Element {
  //Modal
  const [show, setShow] = useState<boolean>(false);

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
            {contextMenu === contextMenuTypeEnum.Wishlist ||
            contextMenu === contextMenuTypeEnum.Base ? (
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip>
                    {contextMenu === contextMenuTypeEnum.Wishlist
                      ? 'Убрать из Избранного'
                      : 'Добавить в Избранное'}
                  </Tooltip>
                }
              >
                <Button className="text-primary btn btn-icon btn-light btn-xs rounded-circle shadow-sm">
                  <i
                    className={`${
                      contextMenu === contextMenuTypeEnum.Wishlist
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
