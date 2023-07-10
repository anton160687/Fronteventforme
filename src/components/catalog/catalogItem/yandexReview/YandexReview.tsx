import { PlaceReceived } from '@/types/placeType';
import YaComments from '../yaComments/YaComments';
import YaMap from '../yaMap/yaMap';
import styles from '@/styles/catalog/places/Places.module.scss';

type YandexReviewProps = {
  place: PlaceReceived;
};

function YandexReview({ place }: YandexReviewProps) {
  return (
      <section className={'border-top ' + styles.pt40}>
          <h2 className='fs-4'>Расположение</h2>
      <div id="map" className={'text-center ' + styles.mb40}>
        <YaMap lat={place.width} long={place.longitude} />
      </div>
      <div className={styles.mb40}>
        <YaComments id={place.id_yandex} />
      </div>
    </section>
  );
}

export default YandexReview;
