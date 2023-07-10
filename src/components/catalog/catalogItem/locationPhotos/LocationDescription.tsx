import Link from 'next/link';
import { Card } from 'react-bootstrap/';
import styles from '@/styles/catalog/places/LocationPhotos.module.scss';
import { numberOfAreas } from '@/services/parse.service';

type LocationDescriptionProps = {
  title: string;
  areasNumber: number;
  address: string;
  metro?: string;
};

function LocationDescription({
  title,
  areasNumber = 0,
  address,
  metro,
}: LocationDescriptionProps) {
  return (
    <>
      <div className={styles.location__flex_container}>
        <h1 className='fs-4'>{title}</h1>
        {areasNumber && (
          <Card.Footer className="fs-sm d-flex flex-wrap align-items-center justify-content-evenly">
            <span className="text-nowrap ps-2">
              {areasNumber} {numberOfAreas(areasNumber)}
            </span>
          </Card.Footer>
        )}
      </div>

      <div className={styles.location__flex_container}>
        <p>{address || 'Адрес не указан'}</p>
        <Link href="#map" className={styles.location__map}>
          <i className="fi-map" /> <p>На карте</p>
        </Link>
      </div>
      <p>Метро: {metro || 'не указано'}</p>
    </>
  );
}

export default LocationDescription;
