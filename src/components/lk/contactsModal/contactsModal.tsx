import {
  MOBILE_REQUIREMENTS,
  MOBILE_TITLE,
  NAME_REQUIREMENTS,
  NAME_TITLE,
} from '@/constant';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Button, CloseButton, Form, Modal } from 'react-bootstrap';

type ContactsModalProps = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

function ContactsModal({ isShown, setIsShown }: ContactsModalProps) {
  const handleModalClose = () => setIsShown(false);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Modal centered show={isShown} onHide={handleModalClose}>
      <Modal.Header className="d-block position-relative border-0 pb-0 px-sm-5 px-4">
        <Modal.Title as="h4" className="mb-3">
          Оставьте заявку на обратную связь
        </Modal.Title>
        <CloseButton
          onClick={handleModalClose}
          aria-label="Закрыть окно"
          className="position-absolute top-0 end-0 mt-3 me-3 text-dark"
        />
        <p className="text-dark" style={{ fontWeight: '500' }}>
          Или, если вам неудобно говорить, напишите в нашу поддержку!
        </p>
      </Modal.Header>
      <Modal.Body className="px-sm-5 px-4">
        <Form
          onSubmit={handleSubmit}
          className="text-dark"
          style={{ fontWeight: '500' }}
          validated={validated}
        >
          <Form.Group controlId="c-name" className="mb-4">
            <Form.Label>
              Имя <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              size="lg"
              required
              placeholder="Как к вам можно обращаться?"
              pattern={NAME_REQUIREMENTS}
              title={NAME_TITLE}
            />
            <Form.Control.Feedback type="invalid">
              {NAME_TITLE}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="c-tel" className="mb-4">
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              size="lg"
              type="tel"
              pattern={MOBILE_REQUIREMENTS}
              title={MOBILE_TITLE}
              placeholder="Введите номер телефона"
            />
            <Form.Control.Feedback type="invalid">
              {MOBILE_TITLE}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="c-message" className="mb-4">
            <Form.Label>Текст обращения</Form.Label>
            <Form.Control
              size="lg"
              as="textarea"
              rows={4}
              placeholder="Чем можем вам помочь?"
            />
            <Form.Control.Feedback type="invalid">
              Please, leave your message
            </Form.Control.Feedback>
          </Form.Group>
          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="w-sm-auto w-100"
            >
              Отправить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default ContactsModal;
