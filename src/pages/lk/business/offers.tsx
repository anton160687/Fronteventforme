import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles } from '@/constant';
import { MouseEvent, useState } from 'react';
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

function Offers() {
  const navItems = [
    {
      title: 'Опубликовано',
      value: 'published',
      icon: 'fi-file',
    },
    {
      title: 'Модерация',
      value: 'moderation',
      icon: 'fi-users',
    },
    {
      title: 'Черновики',
      value: 'draft',
      icon: 'fi-file-clean',
    },
    {
      title: 'Архив',
      value: 'archive',
      icon: 'fi-archive',
    },
  ];

  const [cards, setCards] = useState<PlaceCardType[]>(placesPublished);

  const clearAll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCards([]);
  };

  const handleSelect = (eventKey: string) => {
    switch (eventKey) {
      case 'published':
        setCards(placesPublished);
        break;
      case 'moderation':
        setCards(placesModerate);
        break;
      case 'draft':
        setCards(placesDraft);
        break;
      case 'archive':
        setCards(placesArchive);
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
        <a
          href="#"
          className={'fw-bold text-decoration-none ' + styles.clearBtn}
          onClick={clearAll}
        >
          <i className="fi-trash mt-n1 me-2"></i>
          Удалить все
        </a>
        <p style={{ fontWeight: '500' }}>
          Тариф — <span className="text-primary fw-bold">Стандартный</span>
        </p>

        <Nav
          variant="tabs"
          defaultActiveKey="published"
          className="fs-base border-bottom mb-4 justify-content-center justify-content-sm-start"
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
            <LKCard deleteCard={deleteCard} card={card} key={indx} />
          ))
        ) : (
          // Empty state
          <div className="text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0">
            <i className="fi-heart display-6 text-muted mb-4"></i>
            <h2 className="h5 mb-2">Your Wishlist is empty!</h2>
            <p className="pb-1">
              Search our catalog for relevant properties and add them to you
              Wishlist to buy or rent them later.
            </p>
            {/* @ts-ignore: bootstrap bag*/}
            <Button as={Link} href="/real-estate/catalog?category=rent">
              Go to Catalog
            </Button>
          </div>
        )}
      </>
    </LKNavigation>
  );
}
export default Offers;
