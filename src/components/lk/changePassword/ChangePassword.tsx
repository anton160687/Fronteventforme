import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import Dropdown from 'react-bootstrap/Dropdown';
import { ChangePasswordType } from '@/types/forms';
import {
  FormFields,
  PASSWORD_REQUIREMENTS,
  PASSWORD_TITLE,
  Paths,
} from '@/constant';

function ChangePassword() {
  const [passwordsState, setPasswordsState] = useState<ChangePasswordType>({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  // Form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity()) {
      setValidated(true);

      console.log('passwordsState', passwordsState);
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPasswordsState({
      ...passwordsState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  const contextMenuRender = () => {
    return (
      <div className="align-self-center ms-auto">
        <Dropdown>
          <Dropdown.Toggle
            size="sm"
            variant="light btn-icon rounded-circle shadow-sm"
          >
            <i className="fi-dots-vertical"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="pb-3 my-1">
            <Dropdown.Item>Не ваше устройство?</Dropdown.Item>
            <a href="#" className="d-block px-3 text-decoration-none">
              Выйти из системы
            </a>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <>
      <p className="pt-1">
        Управляйте настройками пароля и защищайте свою учетную запись.
      </p>
      <h2 className="h5">Пароль</h2>
      <Form validated={validated} onSubmit={handleSubmit} className="pb-4">
        <Row xs={1} sm={2} md={1} lg={2} className="align-items-end mb-2">
          <Col className="mb-2">
            <Form.Label htmlFor="account-password">Текущий пароль</Form.Label>
            <PasswordToggle
              id="account-password"
              required
              size=""
              light={false}
              className=""
              style={null}
              minLength="8"
              maxLength="50"
              autoComplete="off"
              pattern={PASSWORD_REQUIREMENTS}
              title={PASSWORD_TITLE}
              name={FormFields.OldPassword}
              onChange={handleChange}
            />
          </Col>
          <Col className="mb-2">
            <Link
              href={Paths.Renew}
              className="d-inline-block mb-2 text-decoration-none"
            >
              Забыли пароль?
            </Link>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={1} lg={2} className="align-items-end mb-2">
          <Col className="mb-3">
            <Form.Label htmlFor="account-password-new">Новый пароль</Form.Label>
            <PasswordToggle
              id="account-password-new"
              required
              size=""
              light={false}
              className=""
              style={null}
              minLength="8"
              maxLength="50"
              autoComplete="off"
              pattern={PASSWORD_REQUIREMENTS}
              title={PASSWORD_TITLE}
              name={FormFields.NewPassword}
              onChange={handleChange}
            />
          </Col>
          <Col className="mb-3">
            <Form.Label htmlFor="account-password-confirm">
              Подтвердите пароль
            </Form.Label>
            <PasswordToggle
              id="account-password-confirm"
              required
              size=""
              light={false}
              className=""
              style={null}
              minLength="8"
              maxLength="50"
              autoComplete="off"
              pattern={passwordsState.new_password}
              title={'Пароли должны совпадать.'}
              name={FormFields.ConfirmPassword}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Button type="submit" variant="primary">
          Сохранить изменения
        </Button>
      </Form>
      <div className="border-top pt-4 mt-3"></div>
      <h2 className="h5 pt-2 mb-4">Где вы вошли в систему</h2>

      {/* //!пока решила оставить так, как будут данные с бека переделаю */}
      {/* Device */}
      <div className="d-flex border-bottom pb-3 mb-3">
        <i className="fi-device-desktop fs-5 text-muted me-1"></i>
        <div className="ps-2">
          <div className="fw-bold mb-1">Mac &mdash; New York, USA</div>
          <span className="d-inline-block fs-sm border-end pe-2 me-2">
            Chrome
          </span>
          <span className="fs-sm fw-bold text-success">Active now</span>
        </div>
      </div>

      {/* Device */}
      <div className="d-flex border-bottom pb-3 mb-3">
        <i className="fi-device-mobile fs-5 text-muted me-1"></i>
        <div className="ps-2">
          <div className="fw-bold mb-1">iPhone 12 &mdash; New York, USA</div>
          <span className="d-inline-block fs-sm border-end pe-2 me-2">
            Finder App
          </span>
          <span className="fs-sm">20 hours ago</span>
        </div>
        {contextMenuRender()}
      </div>

      {/* Device */}
      <div className="d-flex border-bottom pb-3 mb-3">
        <i className="fi-device-desktop fs-5 text-muted me-1"></i>
        <div className="ps-2">
          <div className="fw-bold mb-1">Windows 10.1 &mdash; New York, USA</div>
          <span className="d-inline-block fs-sm border-end pe-2 me-2">
            Chrome
          </span>
          <span className="fs-sm">November 15 at 8:42 AM</span>
        </div>
        {contextMenuRender()}
      </div>
      <a
        href="#"
        className="d-inline-flex align-items-center fw-bold text-decoration-none mt-3"
      >
        <i className="fi-x-circle me-1"></i>
        Выйти со всех устройств
      </a>
    </>
  );
}

export default ChangePassword;
