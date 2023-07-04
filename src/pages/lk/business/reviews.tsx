import Tab from 'react-bootstrap/Tab';
import Fade from 'react-bootstrap/Fade';
import Nav from 'react-bootstrap/Nav';
import Review from '@/components/review/Review';
import { LKSectionsTitles, Paths } from '@/constant';
import PaginationBar from '@/components/review/pagination/Pagination';
import { reviewsAboutYou, reviewsByYou } from '@/mocks/reviews';
import { ReviewType } from '@/types/review';
import EmptyReviews from '@/components/lk/reviews/EmptyReviews';
import withAuth from '@/hoc/withAuth';
import LKNavigation from '@/components/lk/Navigation/LKNavigation';

function BusinessReviewsPage() {
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
    ));
  }

  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Reviews}
      LKBreadcrumbs={{ name: LKSectionsTitles.Reviews, path: Paths.AccReviews }}
    >
      <>
        <p className="pt-1 mb-4">
          Отзывы, которые вы получили, будут видны как здесь, так и в вашем
          общедоступном профиле.
        </p>
        <Tab.Container defaultActiveKey="reviewsAboutYou" transition={Fade}>
          <Nav
            variant="tabs"
            className="flex-column flex-sm-row align-items-stretch align-items-sm-start border-bottom mb-4"
          >
            <Nav.Item className="me-sm-3 mb-3">
              <Nav.Link eventKey="reviewsAboutYou">
                Отзывы о ваших бизнесах
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
              <Nav.Link eventKey="reviewsByYou">Ваши отзывы</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            {/* Отзывы на бизнесы поставщика */}
            <Tab.Pane eventKey="reviewsAboutYou">
              {reviewsAboutYou.length === 0 ? (
                <EmptyReviews />
              ) : (
                <>
                  <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3">
                    <h3 className="h4 mb-sm-0">
                      <i className="fi-star-filled mt-n1 me-2 lead align-middle text-warning"></i>
                      4,9 (32 отзыва)
                    </h3>
                    {/* <Form.Group controlId='sortby1' className='d-flex align-items-center ms-sm-4'>
                  <Form.Label className='fs-sm text-body fw-normal text-nowrap mb-0 me-2 pe-1'>
                    <i className='fi-arrows-sort opacity-60 mt-n1 me-2'></i>
                    Sort by:
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
                  {renderReviews(reviewsAboutYou)}
                </>
              )}

              <nav className="py-2" aria-label="Reviews pagination">
                <PaginationBar
                  currentPage={1}
                  totalCount={10}
                  siblingCount={2}
                  pageSize={4}
                  query={''}
                  path={Paths.AccBusinessReviews}
                />
              </nav>
            </Tab.Pane>

            <Tab.Pane eventKey="reviewsByYou">
              {reviewsByYou.length === 0 ? (
                <EmptyReviews />
              ) : (
                <>
                  <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3">
                    <h3 className="h4 mb-sm-0">3 reviews</h3>
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
              )}

              <nav className="py-2" aria-label="Reviews pagination">
                <PaginationBar
                  currentPage={1}
                  totalCount={10}
                  siblingCount={2}
                  pageSize={4}
                  query={''}
                  path={Paths.AccBusinessReviews}
                />
              </nav>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </>
    </LKNavigation>
  );
}

export default withAuth(BusinessReviewsPage);
