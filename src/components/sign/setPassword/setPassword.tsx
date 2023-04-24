import { useState, FormEvent, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import Button from 'react-bootstrap/Button';
import { PASSWORD_REQUIREMENTS, PASSWORD_TITLE } from '@/constant';

const formFields = {
  password: 'password',
  confirmPassword: 'confirmPassword',
};

export default function SetPassword(): JSX.Element {
  // Form validation
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

  const [password, setPassword] = useState('');

  return (
    <div className="col-md-6 px-2 pt-2 pb-4 px-sm-6 pb-sm-5 pt-md-5">
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        style={{ fontWeight: '500' }}
        className="w-100"
      >
        <Form.Group className="mb-4">
          <Form.Label htmlFor="password">
            Пароль <span className="fs-sm text-muted">(макс. 50 символов)</span>
          </Form.Label>
          <PasswordToggle
            id="confirm-password"
            minLength="8"
            maxLength="50"
            required
            size=""
            light={false}
            className=""
            style=""
            autoComplete="off"
            placeholder="Введите пароль"
            pattern={PASSWORD_REQUIREMENTS}
            title={PASSWORD_TITLE}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            name={formFields.password}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="confirm-password">Подтвердите пароль</Form.Label>
          <PasswordToggle
            id="confirm-password"
            minLength="8"
            maxLength="50"
            required
            size=""
            light={false}
            className=""
            style=""
            autoComplete="off"
            name={formFields.confirmPassword}
            placeholder="Повторите пароль"
            pattern={password}
            title={'Пароли должны совпадать.'}
          />
        </Form.Group>

        <Button type="submit" size="lg" variant="primary w-100">
          Сохранить изменения
        </Button>
      </Form>
    </div>
  );
}
