import Review from '@/components/review/Review';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles, Paths } from '@/constant';
import PaginationBar from '@/components/review/pagination/Pagination';
import { reviewsByYou } from '@/mocks/reviews';
import { ReviewType } from '@/types/review';
import EmptyReviews from '@/components/lk/reviews/EmptyReviews';
import withAuth from '@/hoc/WithAuth';

function BrideReviewsPage() {

  function renderReviews(reviews: ReviewType[]) {
    return reviews.map((review, indx) => (
      <Review
        key={indx}
        author_id={1}
        author_name={review.author_name}
        avatar={review.avatar}
        text={review.text}
        rating={review.rating}
        date={review.date}
        likeCount={review.likes}
        dislikeCount={review.dislikes}
      />
    ))
  }

  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Reviews}>
      <>
        {reviewsByYou.length === 0 ?
          <EmptyReviews />
          :
          <>
            <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3'>
              <h3 className='h4 mb-sm-0'>3 reviews</h3>
              {/* <Form.Group controlId='sortby2' className='d-flex align-items-center ms-sm-4'>
                  <Form.Label className='fs-sm text-body fw-normal text-nowrap mb-0 me-2 pe-1'>
                    <i className='fi-arrows-sort opacity-60 mt-n1 me-2'></i>
                    Сортировать по:
                  </Form.Label>
                  <Form.Select size='sm'>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='Hight rating'>Hight rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group> */}
            </div>
            {renderReviews(reviewsByYou)}
          </>
        }

        <nav className='py-2' aria-label='Reviews pagination'>
          <PaginationBar
            currentPage={1}
            totalCount={10}
            siblingCount={2}
            pageSize={4}
            query={''}
            path={Paths.AccBusinessReviews}
          />
        </nav>
      </>
    </LKNavigation>
  )
}

export default withAuth(BrideReviewsPage);