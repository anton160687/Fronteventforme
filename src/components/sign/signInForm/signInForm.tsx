import Form from 'react-bootstrap/Form';
import PasswordToggle from '../../_finder/PasswordToggle';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import { PATHS } from '@/constant';

const formFields = {
  // username: 'username',
  email: 'email',
  password: 'password',
};

export default function SignInForm(): JSX.Element {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    //! не придумала, какой тип должен быть
    let formValues: any = {};
    const formData = new FormData(form);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // здесь хранятся данные из формы в виде массива объектов с полями из formFields
      //! не придумала, какой тип должен быть
      Object.keys(formFields).map((el) => {
        formValues[el] = formData.get(el);
      });

      setValidated(true);
    }
  };

  return (
    <Form
      validated={validated}
      onSubmit={handleSubmit}
      style={{ marginLeft: '5rem' }}
      method="post"
      action="#"
    >
      <Form.Group controlId="si-email" className="mb-4">
        <Form.Label style={{ fontWeight: '500' }}>Электронная почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="primer@mail.ru"
          required
          name={formFields.email}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <Form.Label
            htmlFor="si-password"
            className="mb-0"
            style={{ fontWeight: '500' }}
          >
            Пароль
          </Form.Label>
          <Link href={PATHS.forgotPassword} className={styles.link + ' fs-sm'}>
            Забыли пароль?
          </Link>
        </div>
        <PasswordToggle
          id="si-password"
          placeholder="Введите пароль"
          required
          style={{}}
          light={false}
          className=""
          size=""
          autoComplete="off"
          name={formFields.password}
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="primary w-100">
        Войти на портал
      </Button>
    </Form>
  );
}
