import Link from 'next/link';
import { Card } from 'react-bootstrap/';
import styles from '@/styles/catalog/places/LocationPhotos.module.scss';
import { PlaceRecieved } from '@/types/placeType';

type LocationDescriptionProps = {
  item: PlaceRecieved;
};

function LocationDescription({ item }: LocationDescriptionProps) {
  const numberOfAreas = (number: number | undefined): string => {
    if (number === undefined) {
      return '';
    } else {
      const count = number % 10;
      if (count === 1) return 'помещение';
      if (1 < count || count < 5) return 'помещения';
      if (number === 0 || 4 < count || count < 10) return 'помещений';
    }
    return '';
  };

  return (
    <>
      <div className={styles.location__flex_container}>
        <h3>{item.title}</h3>
        <Card.Footer className={styles.text_title}>
          <span>
            {item.areas.length} {numberOfAreas(item.areas.length)}
          </span>
        </Card.Footer>
      </div>

      <div className={styles.location__flex_container}>
        <p>{item.address}</p>
        <Link href="#map" className={styles.location__map}>
          <i className="fi-map" /> <p>На карте</p>
        </Link>
      </div>
    </>
  );
}

export default LocationDescription;
