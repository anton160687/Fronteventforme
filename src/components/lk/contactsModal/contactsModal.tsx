import {
  MOBILE_REQUIREMENTS,
  MOBILE_TITLE,
  NAME_REQUIREMENTS,
  NAME_TITLE,
} from '@/constant';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button, CloseButton, Form, Modal } from 'react-bootstrap';

type ContactsModalProps = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

function ContactsModal({ isShown, setIsShown }: ContactsModalProps) {
  const handleModalClose = () => setIsShown(false);
  const [validated, setValidated] = useState(false);
  const [isCall, setIsCall] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    if (phoneNumber) setIsCall(true);
    else setIsCall(false);
  }, [phoneNumber]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      setIsShown(false);
      setPhoneNumber('');
    }
  };

  return (
    <Modal size="lg" centered show={isShown} onHide={handleModalClose}>
      <Modal.Header className="d-block position-relative border-0 pb-0 px-sm-5 px-4">
        <Modal.Title as="h4" className="mb-2">
          Оставьте заявку на обратную связь
        </Modal.Title>
        <CloseButton
          onClick={handleModalClose}
          aria-label="Закрыть окно"
          className="position-absolute top-0 end-0 mt-3 me-3 text-dark"
        />
        <p className="text-dark m-0" style={{ fontWeight: '500' }}>
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
              className="w-100 w-lg-50"
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
              value={phoneNumber}
              onChange={onChange}
              className="w-100 w-lg-50"
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
              cols={10}
              placeholder="Чем можем вам помочь?"
            />
          </Form.Group>
          <Form.Group controlId="bare_lease">
            <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
              Какой способ связи предпочитаете?
            </Form.Label>

            <Form.Check
              type="radio"
              name="contact_way"
              value={0}
              label={' Хочу получить обратный звонок'}
              id={'contact_way-1'}
              checked={isCall}
              onChange={() => setIsCall(true)}
              style={{ color: '#666276' }}
            />

            <Form.Check
              type="radio"
              name="contact_way"
              label={' Хочу получить ответ в чате поддержки на сайте'}
              id={'contact_way-2'}
              value={1}
              checked={!isCall}
              onChange={() => setIsCall(false)}
              style={{ color: '#666276' }}
            />
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
