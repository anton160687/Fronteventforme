import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { PASSWORD_REQUIREMENTS, PASSWORD_TITLE, FormFields, Paths } from '@/constant';
import styles from '@/styles/sign/Sign.module.scss';
import { SigninUserData } from '@/types/forms';
import { signinUser } from '@/store/user/userAPI';
import router from 'next/router';

export default function SignInForm(): JSX.Element {
  const [validated, setValidated] = useState(false);
  const initialDataState: SigninUserData = {
    is_bride: true,
    email: '',
    password: '',
  };
  const [data, setData] = useState<SigninUserData>(initialDataState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleToggle(e: ChangeEvent<HTMLInputElement>) {
    let value = +e.target.value;
    setData({
      ...data,
      [e.target.name]: !!value,
    });
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      signinUser(data);
      router.push('/');
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
      <Form.Group controlId="su-radio" className="mb-4">
        <ButtonGroup
          className="w-100"
          size="lg"
          style={{ position: 'relative' }}
        >
          <ToggleButton
            type="radio"
            id="bride"
            name={FormFields.IsBride}
            value={1}
            checked={data.is_bride}
            onChange={handleToggle}
            variant="outline-primary fw-normal"
            className={styles.toggle_btn}
          >
            <i className="fi-user fs-lg me-1"></i>
            <span className={styles.toggle_btn}>Я пользователь</span>
          </ToggleButton>
          <Form.Control
            style={{ position: 'absolute', zIndex: '-1' }}
          />
          <ToggleButton
            type="radio"
            id="vendor"
            name={FormFields.IsBride}
            value={0}
            checked={!data.is_bride}
            onChange={handleToggle}
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
          name={FormFields.Email}
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
          <Link href={Paths.Renew} className={styles.link + ' fs-sm'}>
            Забыли пароль?
          </Link>
        </div>
        <PasswordToggle
          id="si-password"
          placeholder="Введите пароль"
          name={FormFields.Password}
          onChange={handleChange}
          required
          style={{}}
          light={false}
          className=""
          size=""
          autoComplete="off"
          // pattern={PASSWORD_REQUIREMENTS}
          title={PASSWORD_TITLE}
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="primary w-100">
        Войти на портал
      </Button>
    </Form>
  );
}
