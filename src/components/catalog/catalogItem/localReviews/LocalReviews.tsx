import Review from '@/components/review/Review';
import { Paths, ReviewTabs } from '@/constant';
import {
  cleanliness,
  comfort,
  kitchen,
  location,
  quality,
  service,
  allReviwes,
} from '@/mocks/reviews';
import { ReviewType } from '@/types/review';
import { FormEvent, useState } from 'react';
import { Button, CloseButton, Form, Modal, Nav } from 'react-bootstrap';
import PaginationBar from '@/components/review/pagination/Pagination';

const options = [
  { value: 'Newest', title: 'Newest' },
  { value: 'Oldest', title: 'Oldest' },
  { value: 'Popular', title: 'Popular' },
];

const navItems = [
  { title: 'Расположение', value: ReviewTabs.Location },
  { title: 'Чистота', value: ReviewTabs.Cleanliness },
  { title: 'Обслуживание', value: ReviewTabs.Service },
  { title: 'Кухня', value: ReviewTabs.Kitchen },
  { title: 'Комфорт', value: ReviewTabs.Comfort },
  { title: 'Стоимость/качество', value: ReviewTabs.Quality },
  { title: 'Интерьер', value: ReviewTabs.Interier },
];

type LocalReviewsProps = {
  id: number;
};

function LocalReviews({ id }: LocalReviewsProps) {
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState(location);

  // Form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  //Nav
  const handleSelect = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>
  ) => {
    switch (eventKey) {
      case ReviewTabs.Location:
        setReviews(location);
        break;
      case ReviewTabs.Cleanliness:
        setReviews(cleanliness);
        break;
      case ReviewTabs.Comfort:
        setReviews(comfort);
        break;
      case ReviewTabs.Kitchen:
        setReviews(kitchen);
        break;
      case ReviewTabs.Quality:
        setReviews(quality);
        break;
      case ReviewTabs.Service:
        setReviews(service);
        break;
      case ReviewTabs.Interier:
        setReviews(allReviwes);
        break;

      case null:
        console.error('eventKey = null');
        break;
    }
  };

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

  function addReviewBtnRender() {
    return (
      <Button variant="primary mb-sm-0 mb-3" onClick={() => setModalShow(true)}>
        <i className="fi-edit mt-n1 me-1 align-middle"></i>
        Добавить отзыв
      </Button>
    );
  }

  return (
    <div className="mb-4 mb-xl-0">
      {/* Add review modal */}
      <Modal centered show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header className="d-block position-relative border-0 pb-0 px-sm-5 px-4">
          <Modal.Title as="h3" className="mt-4 text-center">
            Leave a review
          </Modal.Title>
          <CloseButton
            onClick={() => setModalShow(false)}
            aria-label="Close modal"
            className="position-absolute top-0 end-0 mt-3 me-3"
          />
        </Modal.Header>
        <Modal.Body className="px-sm-5 px-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="review-name" className="mb-3">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control placeholder="Your name" required />
              <Form.Control.Feedback type="invalid">
                Please let us know your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="review-email" className="mb-3">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="review-rating" className="mb-3">
              <Form.Label>
                Rating <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select required>
                <option value="">Choose rating</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please rate the property.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="review-text" className="mb-4">
              <Form.Label>
                Review <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your review message"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please write your review.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="primary d-block w-100 mb-4">
              Submit a review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Кнопка и сортировка */}
      <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-1 pb-2">
        {addReviewBtnRender()}
        <Form.Group
          controlId="sortby"
          className="d-flex align-items-center ms-sm-4"
        >
          <Form.Label className="d-inline-block text-body fs-base fw-normal text-nowrap mb-0 me-2 pe-1">
            <i className="fi-arrows-sort mt-n1 me-2 align-middle text-muted"></i>
            Сортировать по:
          </Form.Label>
          <Form.Select>
            {options.map(({ title, value }) => (
              <option key={title + value} value={value}>
                {title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>

      {/* tabs */}
      <Nav
        variant="tabs"
        defaultActiveKey={ReviewTabs.Location}
        className="fs-sm justify-content-center justify-content-sm-start border-bottom pb-4"
        onSelect={handleSelect}
      >
        {navItems.map((item, index) => (
          <Nav.Item key={index} className={`${index === 0 ? 'ms-0' : ''} mt-3`}>
            <Nav.Link
              eventKey={item.value}
              data-index={item.value}
              className="fw-bold px-2"
            >
              {item.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      {renderReviews(reviews)}

      <div className="mt-3 d-flex flex-sm-row flex-column align-items-sm-center justify-content-between">
        <nav aria-label="Reviews pagination" className="mb-3 mb-md-0">
          <PaginationBar
            currentPage={1}
            totalCount={10}
            siblingCount={2}
            pageSize={4}
            query={''}
            path={Paths.Places + `/${id}`}
            customClass="mb-0"
          />
        </nav>
        {addReviewBtnRender()}
      </div>
    </div>
  );
}

export default LocalReviews;
