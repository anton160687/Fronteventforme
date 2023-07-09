import styles from '@/styles/catalog/places/Places.module.scss';
import StarRating from '../../../_finder/StarRating';

type RatingStarsProps = {
  rating: number;
  voices: number;
};

function RatingStars({ rating, voices }: RatingStarsProps) {
  return (
    <div className="d-flex h-100 flex-column justify-content-center align-self-center align-self-md-start">
      <h1 className="mx-sm-0 my-0 mx-auto">{rating}</h1>
      <p className={styles.rating__stars + ' mx-sm-0 mx-auto'}>
        <StarRating rating={rating} />
      </p>
      <p className="m-0 fs-sm text-nowrap">{voices} отзывов</p>
    </div>
  );
}

export default RatingStars;
