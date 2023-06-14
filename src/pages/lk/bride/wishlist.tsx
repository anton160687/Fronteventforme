import ImageLoader from '@/components/_finder/ImageLoader';
import LKCard from '@/components/lk/card/Card';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles, Paths, contextMenuTypeEnum } from '@/constant';
import { placesPublished } from '@/mocks/catalogPlaces';
import { PlaceCardType } from '@/types/catalog';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function Wishlist() {
  const [cards, setCards] = useState<PlaceCardType[]>(placesPublished);

  const deleteCard = (id: number) => {
    const newCards = cards.filter((place) => place.id !== id);
    setCards(newCards);
  };

  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Wishlist}>
      <>
        {/* List of properties or empty state */}
        {cards.length > 0 ? (
          cards.map((card, indx) => (
            <LKCard
              contextMenu={contextMenuTypeEnum.Wishlist}
              card={card}
              key={indx}
              deleteCard={deleteCard}
            />
          ))
        ) : (
          // Empty state
          <>
            <h3 className="h3 mb-2">В списке пока пусто</h3>
            <p className="pb-1">
              Отмечайте понравившиеся товары и исполнителей, чтобы вернуться к
              них позже.
            </p>

            <Button
              // @ts-ignore: bootstrap bag*
              as={Link}
              size="lg"
              href={Paths.Catalog}
              variant="translucent-primary"
              className="mb-5 d-block"
              style={{ width: 'fit-content' }}
            >
              Перейти в каталог
              <i className={'fi-chevron-right fs-xs ms-2'}></i>
            </Button>
            <ImageLoader
              width={515}
              height={528}
              alt="Мужчина с текстовыделителем подчеркивает текст в своей анкете"
              src="/img/emptyWishlist.svg"
            />
          </>
        )}
      </>
    </LKNavigation>
  );
}
export default Wishlist;
