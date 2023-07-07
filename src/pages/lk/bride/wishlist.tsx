import ImageLoader from '@/components/_finder/ImageLoader';
import LKCard from '@/components/lk/card/Card';
import { LKSectionsTitles, Paths, ContextMenuTypeEnum } from '@/constant';
import { placesPublished } from '@/mocks/catalogPlaces';
import { PlaceCardType } from '@/types/catalog';
import { ChangeEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuth from '@/hoc/withAuth';
import LKNavigation from '@/components/lk/navigation/LKNavigation';

function WishlistPage(): JSX.Element {
  const [cards, setCards] = useState<PlaceCardType[]>(placesPublished);

  const deleteCard = (id: number) => {
    const newCards = cards.filter((place) => place.id !== id);
    setCards(newCards);
  };

  const router = useRouter();
  function handleChoice(e: ChangeEvent<HTMLSelectElement>) {
    const sort = e.target.value;
    //логика сортировки
  }

  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Wishlist}
      LKBreadcrumbs={{
        name: LKSectionsTitles.Wishlist,
        path: Paths.AccWishlist,
      }}
    >
      <>
        {/* List of properties or empty state */}
        {cards.length > 0 ? (
          <>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
              <Form.Group
                controlId="sortby"
                className="d-flex align-items-center flex-shrink-0"
              >
                <Form.Label className="text-body fs-sm me-2 mb-0 pe-1 text-nowrap">
                  <i className="fi-arrows-sort text-muted mt-n1 me-2"></i>
                  Сортировать по:
                </Form.Label>
                <Form.Select size="sm" onChange={handleChoice}>
                  <option value="none">-----</option>
                  {/* //!Мои придумки,надо будет сортировать по типам бизнесов - подробнее уточнить у Антона*/}
                  <option value="RATE_ASC">
                    Рейтинг (от низкого к высокому)
                  </option>
                  <option value="RATE_DESC">
                    Рейтинг (от высокого к низкому)
                  </option>
                </Form.Select>
              </Form.Group>
              <div className="border-top w-100 ms-3"> </div>
            </div>
            {cards.map((card, indx) => (
              <LKCard
                contextMenu={ContextMenuTypeEnum.Wishlist}
                card={card}
                key={indx}
                deleteCard={deleteCard}
              />
            ))}
          </>
        ) : (
          // Empty state
          <div className="border-top pt-4">
            <h3 className="h3 mb-2">В списке пока пусто</h3>
            <p>
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
              width={500}
              height={490}
              alt="Мужчина с текстовыделителем подчеркивает текст в своей анкете"
              src="/img/emptyWishlist.svg"
            />
          </div>
        )}
      </>
    </LKNavigation>
  );
}
export default withAuth(WishlistPage);
