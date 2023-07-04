import { MouseEvent } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { LocationCard } from '@/types/locationCard';
import styles from '@/styles/main/Main.module.scss';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

type LocationProps = {
  locations: LocationCard[];
  title: string;
  href?: string;
  isShowAll: boolean;
  showAllTxt?: string;
};

export function Locations({
  locations,
  title,
  isShowAll,
  href = '#',
  showAllTxt = 'Показать все',
}: LocationProps): JSX.Element {
  function renderLocations() {
    return locations.map((location: LocationCard, index: number) => (
      <div
        className={`${styles.locations_wrapper} card-hover shadow-sm ${
          index === 0 ? styles.locations_wrapper_1 : ''
        }`}
        key={index}
      >
        <Link
          href={`catalog/places/${location.id}`}
          className={styles.locations__overlay}
        >
          <div className={styles.overlay_wrapper}>
            <div className={`${styles.locations__description} pb-3 ps-3`}>
              <h3 className={`${styles.description__title} mb-1`}>
                {location.title}
              </h3>
              <div className={`${styles.description__text} fs-sm opacity-70`}>
                <div className="d-flex align-items-center my-1">
                  <i
                    className={`${styles.description__star} fi-star-filled me-1`}
                  ></i>
                  <p>
                    <span className="fw-bold">{location.rating}</span> (
                    {location.rating})
                  </p>
                </div>
                <div className="d-flex align-items-center my-1">
                  <i className={`fi-map-pin me-1`}></i>
                  <p>{location.address}</p>
                </div>
                <div className="d-flex align-items-center my-1">
                  <i className={`fi-credit-card me-1`}></i>
                  <p className="fw-bold">от {location.min_price} ₽</p>
                </div>
              </div>
            </div>
            <div className={`${styles.locations__icon_wrapper} pt-3 pe-3`}>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>Добавить в Избранное</Tooltip>}
              >
                <Button
                  type="button"
                  className="text-primary btn btn-icon btn-light-primary btn-xs rounded-circle"
                  onClick={addToFav}
                >
                  <i className="fi-heart" />
                </Button>
              </OverlayTrigger>
            </div>
          </div>
        </Link>
        <img src={location.image} alt={location.title} />
      </div>
    ));
  }

  function addToFav(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('Добавлено в избранное');
  }

  return (
    <Container as="section">
      <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>
        <div className="d-sm-flex align-items-center justify-content-between mb-3">
          <h2 className={styles.main__subtitle + ' h3 mb-sm-0'}>{title}</h2>
          {isShowAll && (
            <Link
              href={href}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {showAllTxt}
              <i className="fi-arrow-long-right ms-2"></i>
            </Link>
          )}
        </div>
        <div className={styles.grid}>
          {locations ? renderLocations() : 'Loading'}
        </div>
      </section>
    </Container>
  );
}
