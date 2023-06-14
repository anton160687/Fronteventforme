import LKNavigation from '@/components/lk/Navigation/LKNavigation';
import { LKSectionsTitles, Paths } from '@/constant';
import { MouseEvent, useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import PropertyCard from '@/components/_finder/PropertyCard';
import Link from 'next/link';
import styles from '@/styles/lk/Lk.module.scss';
import { useRouter } from 'next/router';
import { renderCardText } from '@/components/helpers';

function Offers() {
  const router = useRouter();
  const categoryParam = router.query.category;
  console.log('categoryParam', categoryParam);
  console.log('router', router);

  const is_bride = false;
  // const mainLink = `${Paths.Account}${is_bride ? Paths.Bride : Paths.Business}${
  //   Paths.AccOffers
  // }`;
  const mainLink = router.pathname;

  const navItems = [
    {
      title: 'Опубликовано',
      link: mainLink + '/?category=published',
      value: 'published',
      icon: 'fi-file',
    },
    {
      title: 'Модерация',
      link: mainLink + '?category=moderation',
      value: 'moderation',
      icon: 'fi-users',
    },
    {
      title: 'Черновики',
      link: mainLink + '?category=draft',
      value: 'draft',
      icon: 'fi-file-clean',
    },
    {
      title: 'Архив',
      link: mainLink + '?category=archive',
      value: 'archive',
      icon: 'fi-archive',
    },
  ];
  const initialProperties = [
    {
      href: '#',
      images: [['/img/locations/1.png', 'Image']],
      title: 'Площадка Villa Arcobaleno',
      min_capacity: 30,
      max_capacity: 80,
      scheme_of_payment: 'За аренду зала + за банкет', //'bah',
      min_price_banquet: 1000,
      min_price_rent: 1000,
      deposit: 4000,

      amenities: [3, 2, 2],
    },
  ];

  const [cards, setCards] = useState(initialProperties);

  const clearAll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCards([]);
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
          className="fs-base mb-3 justify-content-center justify-content-sm-start"
        >
          {navItems.map((item, index) => (
            <Nav.Item key={index} className="mb-2">
              <Nav.Link
                href={item.link}
                style={{ fontWeight: '500' }}
                active={categoryParam === item.value ? true : false}
              >
                <i className={`${item.icon} mt-n1 me-2`}></i>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* List of properties or empty state */}
        {cards.length > 0 ? (
          cards.map((property, indx) => (
            <PropertyCard
              key={indx}
              href={property.href}
              images={property.images}
              category={null}
              title={property.title}
              location={null}
              price={null}
              badges=""
              light={false}
              dropdown={false}
              wishlistButton={null}
              footer={[
                ['fi-bed', property.amenities[0]],
                ['fi-bath', property.amenities[1]],
                ['fi-car', property.amenities[2]],
              ]}
              horizontal
              className={indx === setCards.length - 1 ? '' : 'mb-4'}
            >
              {renderCardText(
                'Вместимость',
                `${property.min_capacity} - ${property.max_capacity} человек`
              )}

              {renderCardText(
                'Стоимость',
                `Аренда ${property.min_price_rent}₽ + от ${property.min_price_banquet}₽/ч`
              )}

              {renderCardText('Схема оплаты', property.scheme_of_payment)}
            </PropertyCard>
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
