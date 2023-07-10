import StarRating from '../_finder/StarRating';

type ReviewProps = {
  author_id: number;
  author_name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  likeCount: number;
  dislikeCount: number;
  likeActive?: boolean;
  dislikeActive?: boolean;
  likeClick?: () => void;
  dislikeClick?: () => void;
};

function Review({
  author_id,
  author_name,
  avatar,
  rating,
  date,
  text,
  likeCount,
  dislikeCount,
  likeActive,
  dislikeActive,
  likeClick,
  dislikeClick,
}: ReviewProps) {
  const thumbClass = `flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover rouded me-3`;

  return (
    <div className="border-bottom mb-4 pb-4">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center pe-2">
          {avatar && (
            <div
              className="flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover rouded me-3"
              style={{
                width: 48,
                height: 48,
                backgroundImage: 'url(' + avatar + ')',
              }}
            ></div>
          )}
          <div>
            <h6 className="fs-base mb-0">{author_name}</h6>
            <StarRating light={0} rating={rating} />
            <span className="fs-sm opacity-70">
              {rating ? ` (${rating})` : ' (0)'}
            </span>
          </div>
        </div>
        {date && <span className={`fs-sm opacity-50`}>{date}</span>}
      </div>
      <div className={`pb-1 mb-3 opacity-70`}>{text}</div>
      <div className="d-flex align-items-center">
        <button
          type="button"
          className={`btn-like${likeActive ? ' active' : ''} ${
            likeClick ? '' : ' pe-none'
          }`}
          onClick={likeClick}
        >
          <i className="fi-like"></i>
          <span>{likeCount ? `(${likeCount})` : '(0)'}</span>
        </button>
        <div className={`border-end me-1 border-light`}>&nbsp;</div>
        <button
          type="button"
          className={`btn-dislike${dislikeActive ? ' active' : ''} ${
            dislikeClick ? '' : ' pe-none'
          }`}
          onClick={dislikeClick}
        >
          <i className="fi-dislike"></i>
          <span>{dislikeCount ? `(${dislikeCount})` : '(0)'}</span>
        </button>
      </div>
    </div>
  );
}

export default Review;
