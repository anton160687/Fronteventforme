import Form from 'react-bootstrap/Form';
import PasswordToggle from '../../_finder/PasswordToggle';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import ImageLoader from '@/components/_finder/ImageLoader';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function SignUpForm(): JSX.Element {
  // Router
  const router = useRouter();

  // Form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const [userType, setUserType] = useState('');
  return (
    <>
      {/* Page wrapper */}
      <main className="page-wrapper">
        <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
          <ButtonGroup size="lg">
            <ToggleButton
              type="radio"
              id={`user`}
              name="userRole"
              value="user"
              checked={userType === 'user'}
              onChange={(e) => setUserType(e.currentTarget.value)}
              variant="outline-primary fw-normal"
              style={{ fontWeight: '700' }}
            >
              <i className="fi-user fs-lg me-1"></i>
              <span style={{ fontWeight: '700' }}>Я пользователь</span>
            </ToggleButton>
            <ToggleButton
              type="radio"
              id={`supplier`}
              name="userRole"
              value="supplier"
              checked={userType === 'supplier'}
              onChange={(e) => setUserType(e.currentTarget.value)}
              variant="outline-primary fw-normal"
              style={{ fontWeight: '700' }}
            >
              <i className="fi-briefcase  fs-lg me-1"></i>
              <span style={{ fontWeight: '700' }}>Я поставщик</span>
            </ToggleButton>
          </ButtonGroup>
        </div>

        <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
          {/* Sign in card */}

          <Form
            validated={validated}
            onSubmit={handleSubmit}
            style={{ fontWeight: '500' }}
          >
            <Form.Group controlId="su-name" className="mb-4">
              <Form.Label>Имя</Form.Label>
              <Form.Control placeholder="Введите свое имя" required />
            </Form.Group>
            <Form.Group controlId="su-email" className="mb-4">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control
                type="email"
                placeholder="primer@mail.ru"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="su-password">
                Пароль{' '}
                <span className="fs-sm text-muted">(макс. 50 символов)</span>
              </Form.Label>
              <PasswordToggle
                id="su-password"
                minLength="8"
                maxLength="50"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="su-confirm-password">
                Подтвердите пароль
              </Form.Label>
              <PasswordToggle
                id="su-confirm-password"
                minLength="8"
                maxLength="50"
                required
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="terms-agree"
              label={[
                <span key={1}>Я согласен с </span>,
                <Link className={styles.link} key={2} href="#">
                  Условиями пользования
                </Link>,
                <span key={3}> и </span>,
                <Link className={styles.link} key={4} href="#">
                  Политикой конфиденциальности
                </Link>,
              ]}
              required
              className="mb-4"
            />
            <Button type="submit" size="lg" variant="primary w-100">
              Зарегистрироваться
            </Button>
          </Form>
        </div>
      </main>
    </>
  );
}
