import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles, contextMenuTypeEnum } from '@/constant';
import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from '@/styles/lk/Lk.module.scss';
import PlaceCard from '@/components/catalog/placeCard/PlaceCard';
import { PlaceCardType } from '@/types/catalog';
import {
  placesPublished,
  placesDraft,
  placesArchive,
  placesModerate,
} from '@/mocks/catalogPlaces';
import LKCard from '@/components/lk/card/Card';
import DeleteModal from '@/components/lk/modal/DeleteModal';
import ImageLoader from '@/components/_finder/ImageLoader';

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

function Offers() {
  //places
  const [cards, setCards] = useState<PlaceCardType[]>(placesPublished);
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
        setMenuType(contextMenuTypeEnum.Published);
        setCards(placesModerate);
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
          Тариф — <span className="text-primary fw-bold">Стандартный</span>
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
          cards.map((card, indx) => (
            <LKCard
              contextMenu={menuType}
              deleteCard={deleteCard}
              card={card}
              key={indx}
            />
          ))
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
              src="/img/emptyBusiness.png"
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
export default Offers;
