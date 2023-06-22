import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import styles from '@/styles/catalog/places/Places.module.scss';

type CalculateCostProps = {
  min_price_banquet: number;
  average_check: number;
};

function CalculateCost({
  average_check,
  min_price_banquet,
}: CalculateCostProps) {
  const [isCalcShown, setIsCalcShown] = useState(false);
  const handleModalClose = () => setIsCalcShown(false);
  const handleModalShow = () => setIsCalcShown(true);

  const [peopleQuantity, setPeopleQuantity] = useState<number>(0);
  const onChangePeople = (e: ChangeEvent<HTMLInputElement>) => {
    setPeopleQuantity(+e.currentTarget.value);
  };

  const calculateCost = () => {
    if (peopleQuantity) {
      return average_check * peopleQuantity > min_price_banquet
        ? average_check * peopleQuantity
        : min_price_banquet;
    } else return 0;
  };

  return (
    <>
      <button
        className={styles.calc_btn + ' btn btn-primary fw-bold'}
        onClick={handleModalShow}
      >
        <i className="fi-calculator fs-lg me-1"></i>Рассчитать стоимость
      </button>
      {/* Property cost calculator modal */}
      <Modal centered show={isCalcShown} onHide={handleModalClose}>
        <Modal.Header className="d-block position-relative border-0 pb-0 px-sm-5 px-4">
          <Modal.Title as="h4" className="mt-4 text-center">
            Рассчитать стоимость
          </Modal.Title>
          <CloseButton
            onClick={handleModalClose}
            aria-label="Закрыть окно"
            className="position-absolute top-0 end-0 mt-3 me-3"
          />
        </Modal.Header>
        <Modal.Body className="px-sm-5 px-4">
          <Form
            //onSubmit={handleSubmit}
            className="fs-6 fw-normal pt-2 mb-3"
          >
            <Form.Group controlId="calculate-cost" className="pt-2 mb-3">
              {/* //!При нажатии авторизованным пользователем количество
						гостей подставляется из личного кабинета. Можно изменить.*/}
              <Form.Label className="mb-2">
                Укажите количество гостей
              </Form.Label>
              <Form.Control type="number" onChange={onChangePeople} />
            </Form.Group>
            <Form.Text>
              <p className="mb-0">Минимальная стоимость:</p>
              <p className="fs-5 fw-bold">{min_price_banquet} ₽</p>
            </Form.Text>
            <Form.Text>
              <p className="mb-0 text-dark">Итоговая стоимость:</p>
              <p className="fs-5 fw-bold text-primary">{calculateCost()} ₽</p>
            </Form.Text>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CalculateCost;
