import styles from "@/styles/catalog/places/Places.module.scss";
import StarRating from '../../../_finder/StarRating';

type RatingStarsProps = {
  rating: number,
  voices: number,
}

function RatingStars({ rating, voices }: RatingStarsProps) {
  
  // function renderStars(rating: number): JSX.Element | undefined {
  //     while (rating >= 1) {
  //       rating--;
  //       return (<><svg width="32" height="32" fill="#fed94b"> <use xlinkHref="#star"></use> </svg> {renderStars(rating)}</>)
  //     }

  //     if (rating < 1 && rating > 0.4) {
  //       return (
  //         <svg width="32" height="32"> <use xlinkHref="#star" fill="url(#half)"></use> </svg>
  //       )
  //     }
  //   }

  return (
    <div>
    <h3 className={styles.rating__number}>{rating}</h3>
      <p className={styles.rating__stars}>
        <StarRating rating={rating}/>
        {/* {renderStars(rating)} */}
      </p>
      <p className={styles.rating__text}>{voices} отзывов</p>
      {/* <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <defs>
            <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stop-color="#fed94b"></stop>
              <stop offset="50%" stop-color="#f7efc5"></stop>
            </linearGradient>
          </defs>
          <symbol id="star" viewBox="0 0 32 32" >
            <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
          </symbol>
        </defs>
      </svg> */}
    </div>
  )
}

export default RatingStars;