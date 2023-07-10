import RatingStars from '@/components/catalog/catalogItem/ratingStars/RatingStar';
import styles from '@/styles/catalog/places/Places.module.scss';

function Popularity() {
  return (
    <div className={styles.popular__container}>
      {/* тестовые данные, потом - удалить */}
      <RatingStars rating={3.7} voices={58} />
      {/* <RatingStars rating={item?.rating?.rating || 0 } voices={item?.rating?.votes || 0} /> */}
      <div
        className={
          styles.popular__text + ' align-self-center align-self-md-start'
        }
      >
        <p className={styles.popular__par}>
          В избранном у &nbsp;<span>{234}</span>&nbsp;
          <span>человека</span>
        </p>
        <p className={styles.popular__par}>
          Забронировано&nbsp;<span>{12} раз </span>
        </p>
      </div>
    </div>
  );
}

export default Popularity;
