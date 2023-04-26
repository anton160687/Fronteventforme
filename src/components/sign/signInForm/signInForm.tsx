import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '../../_finder/PasswordToggle';
import styles from '@/styles/sign/Sign.module.scss';
import { PATHS } from '@/constant';

type formDataType = {
  email: string,
  password: string,
};

export default function SignInForm(): JSX.Element {
  const [validated, setValidated] = useState(false);
  //создаем стэйт для нашей формы
  const initialDataState: formDataType = {
    email: '',
    password: ''
  }
  const [data, setData] = useState<formDataType>(initialDataState);

  console.log(data);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    //вполне можно оставить эту часть, чтобы использовать встроенную валидацию формы
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      //здесь будут действия по отправке data на бэк
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //а вот здесь, в зависимости от имени поля, можно вставить самые разнообразные проверки
    if (e.target.name === 'email') {
      //какая-нибудь проверка на regexp
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    if (e.target.name === 'password') {
      //какая-нибудь проверка на regexp
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  }

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
          name="email"
          //форма становится контролируемой - т.е., реакт - единственный источник данных для нее
          value={data?.email}
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
          <Link href={PATHS.forgotPassword} className={styles.link + ' fs-sm'}>
            Забыли пароль?
          </Link>
        </div>
        <PasswordToggle
          id="si-password"
          placeholder="Введите пароль"
          name="password"
          //форма становится контролируемой - т.е., реакт - единственный источник данных для нее
          value={data?.password}
          onChange={handleChange}
          required
          style={{}}
          light={false}
          className=""
          size=""
          autoComplete="off"
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="primary w-100">
        Войти на портал
      </Button>
    </Form>
  );
}
