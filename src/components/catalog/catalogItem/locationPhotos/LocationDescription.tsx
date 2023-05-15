import Link from 'next/link';
import { Card } from 'react-bootstrap/';
import styles from "@/styles/catalog/places/LocationPhotos.module.scss";

type LocationDescriptionProps = {
    title?: string
    address?: string
}

function LocationDescription ({title, address}: LocationDescriptionProps) {

    return (<>
              <div className={styles.location__flex_container}>
            <h3>{title || "Карта поставщика"}</h3>
            <Card.Footer className={styles.text_title}>
              <span>3 зала</span>
              <span className="fs-4 text-secondary mx-2">|</span>
              <span>2 шатра</span>
              <span className="fs-4 text-secondary mx-2">|</span>
              <span>2 веранды</span>
            </Card.Footer>
          </div>

          <div className={styles.location__flex_container}>
            <p>{address || "Адрес поставщика"}</p>
            <Link href="#map" className={styles.location__map}>
              <i className="fi-map" /> <p>На карте</p>
            </Link>
          </div>
    </>)
}

export default LocationDescription;