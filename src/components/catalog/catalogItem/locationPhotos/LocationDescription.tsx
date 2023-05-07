import Link from 'next/link';
import { Place } from '@/types/catalog';
import { Card } from 'react-bootstrap/';
import styles from "@/styles/catalog/places/LocationPhotos.module.scss";

type LocationDescriptionProps = {
    item?: Place,
}

function LocationDescription ({item}: LocationDescriptionProps) {
    return (<>
              <div className={styles.location__flex_container}>
            <h3>{item?.title}</h3>
            <Card.Footer className={styles.text_title}>
              <span>3 зала</span>
              <span className="fs-4 text-secondary mx-2">|</span>
              <span>2 шатра</span>
              <span className="fs-4 text-secondary mx-2">|</span>
              <span>2 веранды</span>
            </Card.Footer>
          </div>

          <div className={styles.location__flex_container}>
            <p>{item?.address.full}</p>
            <Link href="#map" className={styles.location__map}>
              <i className="fi-map" /> <p>На карте</p>
            </Link>
          </div>
    </>)
}

export default LocationDescription;