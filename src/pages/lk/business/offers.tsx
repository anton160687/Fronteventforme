import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles, contextMenuTypeEnum } from '@/constant';
import { useState } from 'react';
import styles from '@/styles/lk/Lk.module.scss';
import { PlaceCardType } from '@/types/catalog';
import {
  placesPublished,
  placesDraft,
  placesArchive,
  placesModerate,
  placesDeclined,
} from '@/mocks/catalogPlaces';
import LKCard from '@/components/lk/card/Card';
import ImageLoader from '@/components/_finder/ImageLoader';
import { Button, Nav } from 'react-bootstrap';
import DeleteModal from '@/components/lk/deleteModal/DeleteModal';
import withAuth from '@/hoc/WithAuth';


const navItems = [
  {
    title: 'Опубликовано',
    value: contextMenuTypeEnum.Published,
    icon: 'fi-file',
  },
  {
    title: 'На модерации',
    value: contextMenuTypeEnum.Moderation,
    icon: 'fi-users',
  },
  {
    title: 'Черновики',
    value: contextMenuTypeEnum.Draft,
    icon: 'fi-file-clean',
  },
  {
    title: 'Архив',
    value: contextMenuTypeEnum.Archive,
    icon: 'fi-archive',
  },
];

function OffersPage(): JSX.Element {
  //places
  const [cards, setCards] = useState<PlaceCardType[]>(placesPublished);
  const [declinedCards, setDeclinedCards] =
    useState<PlaceCardType[]>(placesPublished);
  //context menu content
  const [menuType, setMenuType] = useState<string>(
    contextMenuTypeEnum.Published
  );

  //Modal
  const [show, setShow] = useState<boolean>(false);

  //Nav
  const handleSelect = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>
  ) => {
    switch (eventKey) {
      case contextMenuTypeEnum.Published:
        setMenuType(contextMenuTypeEnum.Published);
        setCards(placesPublished);
        break;
      case contextMenuTypeEnum.Moderation:
        //!под вопросом у Евы
        setMenuType(contextMenuTypeEnum.Moderation);
        setCards(placesModerate);
        setDeclinedCards(placesDeclined);
        break;
      case contextMenuTypeEnum.Draft:
        setMenuType(contextMenuTypeEnum.Draft);
        setCards(placesDraft);
        break;
      case contextMenuTypeEnum.Archive:
        setMenuType(contextMenuTypeEnum.Archive);
        setCards(placesArchive);
        break;
      case null:
        console.error('eventKey = null');
        break;
    }
  };

  const deleteCard = (id: number) => {
    const newCards = cards.filter((place) => place.id !== id);
    setCards(newCards);
  };

  const moderationCardsRenderCheck = () => {
    return (
      <>
        {menuType === contextMenuTypeEnum.Moderation ? (
          <>
            <h3>На проверке</h3>
            {cardsRender(cards, menuType)}
            <h3>Отклонено</h3>
            {cardsRender(declinedCards, contextMenuTypeEnum.Declined)}
          </>
        ) : (
          cardsRender(cards, menuType)
        )}
      </>
    );
  };

  const cardsRender = (anyCards: PlaceCardType[], anyMenuType: string) => {
    return (
      <>
        {anyCards.map((card, indx) => (
          <LKCard
            contextMenu={anyMenuType}
            deleteCard={deleteCard}
            card={card}
            key={indx}
          />
        ))}
      </>
    );
  };

  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Offers}>
      <>
        {cards.length > 0 && (
          <Button
            variant="link"
            className={
              'fw-bold text-decoration-none text-primary ' + styles.clearBtn
            }
            onClick={() => setShow(true)}
          >
            <i className="fi-trash mt-n1 me-2"></i>
            Удалить все
          </Button>
        )}
        <p style={{ fontWeight: '500' }}>
          Тариф — <span className="text-primary fw-bold">{'Стандартный'}</span>
        </p>

        <Nav
          variant="tabs"
          defaultActiveKey="published"
          className="fs-base border-bottom justify-content-center justify-content-sm-start"
          onSelect={handleSelect}
        >
          {navItems.map((item, index) => (
            <Nav.Item key={index} className="mb-3">
              <Nav.Link
                style={{ fontWeight: '500' }}
                eventKey={item.value}
                data-index={item.value}
              >
                <i className={`${item.icon} mt-n1 me-3`}></i>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* List of properties or empty state */}
        {cards.length > 0 ? (
          moderationCardsRenderCheck()
        ) : (
          // Empty state
          <>
            <h3 className="h3 mb-2">Нет опубликованных бизнесов</h3>
            <p className="pb-1">
              Начните создавать свою первую публикацию прямо сейчас или
              проверьте уже готовые бизнесы во вкладках “Модерация” и
              “Черновики”.
            </p>
            <ImageLoader
              width={544}
              height={517}
              alt="Человек через лупу смотрит на дом с долларом"
              src="/img/emptyBusiness.svg"
            />
          </>
        )}

        <DeleteModal
          show={show}
          setShow={setShow}
          message={
            'Все бизнесы не будут видны на сайте и останутся в вашем архиве.'
          }
          deleteFunc={() => setCards([])}
        />
      </>
    </LKNavigation>
  );
}
export default withAuth(OffersPage);
