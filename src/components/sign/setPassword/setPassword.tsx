import { useRouter } from 'next/router';
import { useState, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import styles from '@/styles/sign/Sign.module.scss';
import Button from 'react-bootstrap/Button';

export default function SetPassword(): JSX.Element {
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

  return (
    <div className="col-md-6 px-2 pt-2 pb-4 px-sm-6 pb-sm-5 pt-md-5">
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        style={{ fontWeight: '500' }}
        className="w-100"
      >
        <Form.Group className="mb-4">
          <Form.Label htmlFor="su-password">
            Пароль <span className="fs-sm text-muted">(макс. 50 символов)</span>
          </Form.Label>
          <PasswordToggle
            id="su-confirm-password"
            minLength="8"
            maxLength="50"
            required
            size=""
            light={false}
            className=""
            style=""
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
            size=""
            light={false}
            className=""
            style=""
          />
        </Form.Group>

        <Button type="submit" size="lg" variant="primary w-100">
          Сохранить изменения
        </Button>
      </Form>
    </div>
  );
}
