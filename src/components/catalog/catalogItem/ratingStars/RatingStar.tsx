import styles from '@/styles/catalog/places/Places.module.scss';
import StarRating from '../../../_finder/StarRating';

type RatingStarsProps = {
  rating: number;
  voices: number;
};

function RatingStars({ rating, voices }: RatingStarsProps) {
  return (
    <div className="d-flex h-100 flex-column justify-content-center">
      <h1 className="m-0">{rating}</h1>
      <p className={styles.rating__stars}>
        <StarRating rating={rating} />
      </p>
      <p className="m-0 fs-sm text-nowrap">{voices} отзывов</p>
    </div>
  );
}

export default RatingStars;
