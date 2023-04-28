import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '../../_finder/PasswordToggle';
import styles from '../../../styles/sign/Sign.module.scss';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {
  PASSWORD_REQUIREMENTS,
  PASSWORD_TITLE,
  formFields,
  PATHS,
} from '../../../constant';
import React from 'react';

type formDataType = {
  userRole: string;
  email: string;
  password: string;
};

export default function SignInForm(): JSX.Element {
  const [validated, setValidated] = useState(false);
  //создаем стэйт для нашей формы
  const initialDataState: formDataType = {
    userRole: 'bride',
    email: '',
    password: '',
  };
  const [data, setData] = useState<formDataType>(initialDataState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      //здесь будут действия по отправке data на бэк
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <Form
      validated={validated}
      onSubmit={handleSubmit}
      style={{ marginLeft: '5rem' }}
      method="post"
      action="#"
    >
      <Form.Group controlId="su-radio" className="mb-4">
        <ButtonGroup
          className="w-100"
          size="lg"
          style={{ position: 'relative' }}
        >
          <ToggleButton
            type="radio"
            id="bride"
            name={formFields.userRole}
            value="bride"
            checked={data.userRole === 'bride'}
            onChange={handleChange}
            variant="outline-primary fw-normal"
            className={styles.toggle_btn}
          >
            <i className="fi-user fs-lg me-1"></i>
            <span className={styles.toggle_btn}>Я пользователь</span>
          </ToggleButton>
          <Form.Control
            required
            defaultValue={data.userRole}
            style={{ position: 'absolute', zIndex: '-1' }}
          />
          <ToggleButton
            type="radio"
            id="vendor"
            name={formFields.userRole}
            value="vendor"
            checked={data.userRole === 'vendor'}
            onChange={handleChange}
            variant="outline-primary fw-normal"
          >
            <i className="fi-briefcase fs-lg me-1"></i>
            <span className={styles.toggle_btn}>Я поставщик</span>
          </ToggleButton>
        </ButtonGroup>
      </Form.Group>
      <Form.Group controlId="si-email" className="mb-4">
        <Form.Label style={{ fontWeight: '500' }}>Электронная почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="primer@mail.ru"
          required
          name={formFields.email}
          onChange={handleChange}
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
          <Link href={PATHS.renew} className={styles.link + ' fs-sm'}>
            Забыли пароль?
          </Link>
        </div>
        <PasswordToggle
          id="si-password"
          placeholder="Введите пароль"
          name={formFields.password}
          onChange={handleChange}
          required
          style={{}}
          light={false}
          className=""
          size=""
          autoComplete="off"
          pattern={PASSWORD_REQUIREMENTS}
          title={PASSWORD_TITLE}
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="primary w-100">
        Войти на портал
      </Button>
    </Form>
  );
}
