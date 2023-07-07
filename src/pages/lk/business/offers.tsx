import { LKSectionsTitles, Paths, ContextMenuTypeEnum } from '@/constant';
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
import { Button, Nav } from 'react-bootstrap';
import DeleteModal from '@/components/lk/deleteModal/DeleteModal';
import EmptyBusiness from '@/components/lk/offers/EmptyBusiness';
import EmptyModeration from '@/components/lk/offers/EmptyModeration';
import EmptyArchive from '@/components/lk/offers/EmptyArchive';
import EmptyDrafts from '@/components/lk/offers/EmptyDrafts';
import withAuth from '@/hoc/withAuth';
import LKNavigation from '@/components/lk/navigation/LKNavigation';

const navItems = [
  {
    title: 'Опубликовано',
    value: ContextMenuTypeEnum.Published,
    icon: 'fi-file',
  },
  {
    title: 'На модерации',
    value: ContextMenuTypeEnum.Moderation,
    icon: 'fi-users',
  },
  {
    title: 'Черновики',
    value: ContextMenuTypeEnum.Draft,
    icon: 'fi-file-clean',
  },
  {
    title: 'Архив',
    value: ContextMenuTypeEnum.Archive,
    icon: 'fi-archive',
  },
];

function OffersPage(): JSX.Element {
  //places
  const [cards, setCards] = useState<PlaceCardType[]>(placesPublished);
  const [declinedCards, setDeclinedCards] = useState<PlaceCardType[]>([]);
  //context menu content
  const [menuType, setMenuType] = useState<string>(
    ContextMenuTypeEnum.Published
  );

  //Modal
  const [show, setShow] = useState<boolean>(false);

  //Nav
  const handleSelect = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>
  ) => {
    switch (eventKey) {
      case ContextMenuTypeEnum.Published:
        setMenuType(ContextMenuTypeEnum.Published);
        setCards(placesPublished);
        setDeclinedCards([]);
        break;
      case ContextMenuTypeEnum.Moderation:
        setMenuType(ContextMenuTypeEnum.Moderation);
        setCards(placesModerate);
        setDeclinedCards(placesDeclined);
        break;
      case ContextMenuTypeEnum.Draft:
        setMenuType(ContextMenuTypeEnum.Draft);
        setCards(placesDraft);
        setDeclinedCards([]);
        break;
      case ContextMenuTypeEnum.Archive:
        setMenuType(ContextMenuTypeEnum.Archive);
        setCards(placesArchive);
        setDeclinedCards([]);
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
        {menuType === ContextMenuTypeEnum.Moderation ? (
          <>
            {cards.length > 0 && <h3>На проверке</h3>}
            {cardsRender(cards, menuType)}
            {declinedCards.length > 0 && <h3>Отклонено</h3>}
            {cardsRender(declinedCards, ContextMenuTypeEnum.Declined)}
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

  const emptyStateRender = () => {
    switch (menuType) {
      case ContextMenuTypeEnum.Published:
        return <EmptyBusiness />;
      case ContextMenuTypeEnum.Moderation:
        return <EmptyModeration />;
      case ContextMenuTypeEnum.Draft:
        return <EmptyDrafts />;
      case ContextMenuTypeEnum.Archive:
        return <EmptyArchive />;
    }
  };

  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Offers}
      LKBreadcrumbs={{ name: LKSectionsTitles.Help, path: Paths.AccOffers }}
    >
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
          defaultActiveKey={ContextMenuTypeEnum.Published}
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
        {cards.length > 0 || declinedCards.length > 0
          ? moderationCardsRenderCheck()
          : // Empty state
            emptyStateRender()}

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
