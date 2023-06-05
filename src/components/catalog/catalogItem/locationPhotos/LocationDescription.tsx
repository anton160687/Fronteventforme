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

function LocationDescription({ title, areasNumber=0, address, metro }: LocationDescriptionProps) {
  return (
    <>
      <div className={styles.location__flex_container}>
        <h3>{title}</h3>
        {areasNumber && (
          <Card.Footer className={styles.text_title}>
            <span>
              {areasNumber} {numberOfAreas(areasNumber)}
            </span>
          </Card.Footer>
        )}
      </div>

      <div className={styles.location__flex_container}>
        <p>{address}</p>
        <Link href="#map" className={styles.location__map}>
          <i className="fi-map" /> <p>На карте</p>
        </Link>
      </div>
      <p>Метро: {metro || 'не указано'}</p>
    </>
  );
}

export default LocationDescription;
