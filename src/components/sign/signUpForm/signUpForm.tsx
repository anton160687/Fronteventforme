import {
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import {
  PASSWORD_REQUIREMENTS,
  PASSWORD_TITLE,
  FormFields,
  USERNAME_REQUIREMENTS,
  USERNAME_TITLE,
  EMAIL_REQUIREMENTS,
  EMAIL_TITLE,
  Paths,
} from '@/constant';
import styles from '@/styles/sign/Sign.module.scss';
import { CreateUserData } from '@/types/forms';
import { createUser } from '@/store/user/userAPI';
import Error from '../error/Error';
import router from 'next/router';

type SignUpFormProps = {
  signUpForm: boolean;
  setSignUpForm: Dispatch<SetStateAction<boolean>>;
  setSignUpIsDone: Dispatch<SetStateAction<boolean>>;
  data: CreateUserData;
  setData: Dispatch<SetStateAction<CreateUserData>>;
};

export default function SignUpForm({
  signUpForm,
  setSignUpForm,
  setSignUpIsDone,
  data,
  setData,
}: SignUpFormProps): JSX.Element {
  const [error, setError] = useState<string>('');
  const [validated, setValidated] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      setValidated(true);
      let response = await createUser(data);
      setValidated(true);
      if (response === 'success') {
        setError('');
        setSignUpIsDone(true);
      } else {
        if (response.includes('Пользователь с таким Email уже существует.'))
          router.push(Paths.Renew);
        else setError(response);
      }
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <div className="page-wrapper">
      {!signUpForm ? (
        <p
          onClick={() => setSignUpForm((prev) => !prev)}
          className="text-center text-primary cursor-pointer"
        >
          Стандартная регистрация через почту
        </p>
      ) : (
        <>
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4">
            <Form
              onSubmit={handleSubmit}
              className="w-100 fw-semibold"
              validated={validated}
            >
              <Form.Group
                controlId="su-name"
                className={`mb-4 ${error.length > 0 ? styles.invalid : ''}`}
              >
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  placeholder="Введите имя пользователя"
                  required
                  name={FormFields.Username}
                  onChange={handleChange}
                  pattern={USERNAME_REQUIREMENTS}
                  title={USERNAME_TITLE}
                  type="username"
                  isInvalid={error.length > 0 ? true : false}
                />
                {!error && (
                  <Form.Control.Feedback type="invalid">
                    {USERNAME_TITLE}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group
                controlId="su-email"
                className={`mb-4 ${error.length > 0 ? styles.invalid : ''}`}
              >
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="primer@mail.ru"
                  required
                  name={FormFields.Email}
                  onChange={handleChange}
                  pattern={EMAIL_REQUIREMENTS}
                  title={EMAIL_TITLE}
                  isInvalid={error.length > 0 ? true : false}
                />
                {!error && (
                  <Form.Control.Feedback type="invalid">
                    {EMAIL_TITLE}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="su-password">
                  Пароль
                  <span className="fs-sm text-muted"> (макс. 50 символов)</span>
                </Form.Label>
                <PasswordToggle
                  id="su-password"
                  minLength="8"
                  maxLength="50"
                  required
                  size=""
                  light={false}
                  style={{}}
                  placeholder="Введите пароль"
                  name={FormFields.Password}
                  pattern={PASSWORD_REQUIREMENTS}
                  title={PASSWORD_TITLE}
                  onChange={handleChange}
                  autoComplete="off"
                  className={`${error.length > 0 ? styles.invalid : ''}`}
                  //className=""
                  isInvalid={error.length > 0 ? 'true' : 'false'}
                />
                {!error && (
                  <Form.Control.Feedback type="invalid">
                    {PASSWORD_TITLE}
                  </Form.Control.Feedback>
                )}
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
                  style={{}}
                  placeholder="Повторите пароль"
                  name={FormFields.ConfirmPassword}
                  pattern={data.password}
                  title={'Пароли должны совпадать.'}
                  autoComplete="off"
                  onChange={handleChange}
                  className={`${error.length > 0 ? styles.invalid : ''}`}
                  //className=""
                  isinvalid={error.length > 0 ? 'true' : 'false'}
                />
                {!error && (
                  <Form.Control.Feedback type="invalid">
                    Пароли должны совпадать.
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Check
                type="checkbox"
                id="terms-agree"
                label={[
                  <span key={1}>Я согласен с </span>,
                  <Link
                    className={styles.link}
                    key={2}
                    href={Paths.TermsOfUse}
                    target="_blank"
                  >
                    Условиями пользования
                  </Link>,
                  <span key={3}> и </span>,
                  <Link
                    className={styles.link}
                    key={4}
                    href={Paths.PrivacyPolicy}
                    target="_blank"
                  >
                    Политикой конфиденциальности
                  </Link>,
                ]}
                required
                className="mb-4"
              />
              <Error error={error} />
              <Button type="submit" size="lg" variant="primary w-100">
                Зарегистрироваться
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}
