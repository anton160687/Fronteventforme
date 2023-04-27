import { useState, FormEvent, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import Button from 'react-bootstrap/Button';
import { PASSWORD_REQUIREMENTS, PASSWORD_TITLE, formFields } from '@/constant';

type formDataType = {
  password: string;
  confirmPassword: string;
};

export default function SetPassword(): JSX.Element {
  const [validated, setValidated] = useState(false);
  //создаем стэйт для нашей формы
  const initialDataState: formDataType = {
    password: '',
    confirmPassword: '',
  };
  const [data, setData] = useState<formDataType>(initialDataState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity()) {
      setValidated(true);
      //логика отправки на бэк
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

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
            onChange={handleChange}
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
            pattern={data.password}
            title={'Пароли должны совпадать.'}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" size="lg" variant="primary w-100">
          Сохранить изменения
        </Button>
      </Form>
    </div>
  );
}
