import Form from 'react-bootstrap/Form';
import { FormEvent, useState, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import PasswordToggle from '../../_finder/PasswordToggle';

interface SignUpFormProps {
  signUpForm: boolean;
  setSignUpForm: Dispatch<SetStateAction<boolean>>;
  setSignUpIsDone: Dispatch<SetStateAction<boolean>>;
}

const formFields = {
  userRole: 'userRole',
  username: 'username',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

export default function SignUpForm({
  signUpForm,
  setSignUpForm,
  setSignUpIsDone,
}: SignUpFormProps): JSX.Element {
  // Form validation
  const [validated, setValidated] = useState(false);
  const [userType, setUserType] = useState('');

  //filled form data
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    let formValues: any = {};
    const formData = new FormData(form);

    if (
      form.checkValidity() === false
      // formData.get(formFields.confirmPassword) !==
      //   formData.get(formFields.password)
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    // здесь хранятся данные из формы в виде массива объектов с полями из formFields
    //! не придумала, какой тип должен быть
    Object.values(formFields).map((el) => {
      formValues[el] = formData.get(el);
    });

    setSignUpIsDone(true);
    setValidated(true);
  };

  return (
    <div className="page-wrapper" style={{ marginLeft: '5rem' }}>
      {!signUpForm ? (
        <p
          onClick={() => setSignUpForm((prev) => !prev)}
          className="text-center text-primary cursor-pointer"
        >
          Стандартная регистрация через почту
        </p>
      ) : (
        <>
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5"></div>
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
            <Form
              validated={validated}
              onSubmit={handleSubmit}
              style={{ fontWeight: '500' }}
              className="w-100"
            >
              <Form.Group controlId="su-radio" className="mb-4">
                <ButtonGroup
                  className="w-100"
                  size="lg"
                  style={{ position: 'relative' }}
                >
                  <ToggleButton
                    type="radio"
                    id={`user`}
                    name="userRole"
                    value="user"
                    checked={userType === 'user'}
                    onChange={(e) => setUserType(e.currentTarget.value)}
                    variant="outline-primary fw-normal"
                    className={styles.toggle_btn}
                  >
                    <i className="fi-user fs-lg me-1"></i>
                    <span className={styles.toggle_btn}>Я пользователь</span>
                  </ToggleButton>
                  <Form.Control
                    required
                    defaultValue={userType}
                    style={{ position: 'absolute', zIndex: '-1' }}
                  />
                  <ToggleButton
                    type="radio"
                    id={`vendor`}
                    name="userRole"
                    value="vendor"
                    checked={userType === 'vendor'}
                    onChange={(e) => setUserType(e.currentTarget.value)}
                    variant="outline-primary fw-normal"
                  >
                    <i className="fi-briefcase fs-lg me-1"></i>
                    <span className={styles.toggle_btn}>Я поставщик</span>
                  </ToggleButton>
                </ButtonGroup>
              </Form.Group>

              <Form.Group controlId="su-name" className="mb-4">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  placeholder="Введите свое имя"
                  required
                  name={formFields.username}
                />
              </Form.Group>
              <Form.Group controlId="su-email" className="mb-4">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="primer@mail.ru"
                  required
                  name={formFields.email}
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
                  size=""
                  light={false}
                  className=""
                  style={{}}
                  placeholder="Введите пароль"
                  name={formFields.password}
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
                  style={{}}
                  placeholder="Повторите пароль"
                  name={formFields.confirmPassword}
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
        </>
      )}
    </div>
  );
}
