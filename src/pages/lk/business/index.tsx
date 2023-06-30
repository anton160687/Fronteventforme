import { ChangeEvent, FormEvent, FocusEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { BusinessInfo } from '@/types/lkInfoType';
import InfoProfile from '@/components/lk/info/infoProfile';
import DeleteModal from '@/components/lk/deleteModal/DeleteModal';
import {
  LKSectionsTitles,
  USERNAME_REQUIREMENTS,
  EMAIL_REQUIREMENTS,
} from '@/constant';
import styles from '@/styles/lk/Lk.module.scss';
import withAuth from '@/hoc/withAuth';

import { GetServerSideProps } from 'next/types';
import {
  generateBreadcrumbs,
  getBreadCrumbsSchema,
} from '@/components/helpers';
import CustomBreadCrumbs from '@/components/breadcrumbs/CustomBreadcrumbs';

function InfoPage(schemaData: SchemaType) {
  const initialInfoState: BusinessInfo = {
    is_company: false,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    tin: 0,
    company: undefined,
    bio: '',
    avatar: [],
    social_vk: '',
    social_ok: '',
    social_tel: '',
  };
  // при дальнейшей работе будем брать инфо не из "общей" модели юзера
  //Нужен отдельный эндпойнт API, возвращающий более детальную информацию о поставщике/невесте для ЛК
  const storedInfo = useSelector(selectUser);
  useEffect(() => {
    if (storedInfo) {
      initialInfoState.username = storedInfo.username;
      initialInfoState.first_name = storedInfo.first_name;
      initialInfoState.last_name = storedInfo.last_name;
      initialInfoState.email = storedInfo.email;
      initialInfoState.phone = storedInfo.phone;
    }
  }, []);

  const [info, setInfo] = useState<BusinessInfo>(initialInfoState);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    setInfo({ ...info, [e.target.name]: +e.target.value });
  }
  function handleRadio(e: ChangeEvent<HTMLInputElement>) {
    let value = +e.target.value;
    setInfo({ ...info, [e.target.name]: !!value });
  }
  //Filepond
  const [profile, setProfile] = useState<string[]>([]);
  //Progress
  const initialProgres = {
    username: 0,
    first_name: 0,
    last_name: 0,
    email: 0,
    phone: 0,
    tin: 0,
    company: 0,
    bio: 0,
    social_vk: 0,
    social_ok: 0,
    social_tel: 0,
  };
  const [progress, setProgress] = useState(initialProgres);
  let companyProgress = 0;
  let personProgress = 0;
  for (let key in progress) {
    companyProgress += progress[key as keyof typeof progress];
    if (companyProgress === 99) {
      companyProgress = 100;
    }
    if (key !== ' company' && progress[key as keyof typeof progress] !== 0) {
      personProgress += 10;
    }
  }
  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    if (e.target.value !== '') {
      setProgress({ ...progress, [e.target.name]: 9 });
    } else {
      setProgress({ ...progress, [e.target.name]: 0 });
    }
  }
  //Submit
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.checkValidity();
    console.log(info);
    console.log(profile);
  }
  //Modal
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <LKNavigation accountPageTitle={LKSectionsTitles.Info}>
        <Form onSubmit={handleSubmit}>
          <Alert variant="info" className="d-flex mb-4">
            <i className="fi-alert-circle me-2 me-sm-3 lead"></i>
            <div>
              {' '}
              Для добавления бизнеса заполните все необходимые поля
              &quot;Основной информации&quot;.
            </div>
          </Alert>
          <div className="mb-2 pt-1">
            Заполнено на {info.is_company ? companyProgress : personProgress}%{' '}
          </div>
          <ProgressBar
            variant="warning"
            now={info.is_company ? companyProgress : personProgress}
            className="mb-4"
            style={{ height: '.25rem' }}
          />

          <Form.Group
            className="border-bottom pb-3 mb-4"
            controlId="info-is_company"
          >
            <Form.Label>
              <h2 className="form-label fw-bold">
                Ваш статус: <span className="text-danger">*</span>
              </h2>
            </Form.Label>
            <Form.Check
              type="radio"
              name="is_company"
              label="ИП/самозанятый"
              value={0}
              checked={!info.is_company}
              onChange={handleRadio}
            />
            <Form.Check
              type="radio"
              name="is_company"
              label="Организация"
              value={1}
              checked={info.is_company}
              onChange={handleRadio}
            />
          </Form.Group>
          {/* Username */}
          <Form.Group
            className="border-bottom pb-3 mb-4"
            controlId="info-username"
          >
            <Form.Label>
              <h2 className="form-label fw-bold">
                Имя пользователя <span className="text-danger">*</span>
              </h2>
            </Form.Label>
            <Form.Control
              name="username"
              value={info.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Введите имя пользователя"
              pattern={USERNAME_REQUIREMENTS}
              required
            />
          </Form.Group>
          {/* Full name */}
          <Form.Group
            as={Row}
            controlId="info-fullname"
            className={`${styles.lk__info_row} border-bottom pb-3 mb-4`}
          >
            <Col>
              <Form.Label>
                <h2 className="form-label fw-bold">
                  Имя <span className="text-danger">*</span>
                </h2>
              </Form.Label>
              <Form.Control
                name="first_name"
                value={info.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Имя"
                required
              />
            </Col>
            {/* Last name */}
            <Col>
              <Form.Label>
                <h2 className="form-label fw-bold">
                  Фамилия <span className="text-danger">*</span>
                </h2>
              </Form.Label>
              <Form.Control
                name="last_name"
                value={info.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Фамилия"
                required
              />
            </Col>
          </Form.Group>
          {/* Email, Phone */}
          <Form.Group
            as={Row}
            controlId="info-contacts"
            className={`${styles.lk__info_row} border-bottom pb-3 mb-4`}
          >
            <Col>
              <Form.Label>
                <h2 className="form-label fw-bold">
                  Электронная почта <span className="text-danger">*</span>
                </h2>
              </Form.Label>
              <Form.Control
                type="email"
                className="mt-3"
                value={info.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Введите электронную почту"
                pattern={EMAIL_REQUIREMENTS}
                required
              />
            </Col>
            <Col>
              <Form.Label>
                <h2 className="form-label fw-bold">Номер телефона</h2>
              </Form.Label>
              <Form.Control
                type="tel"
                pattern="\+?(7|8)\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}"
                className="mt-3"
                name="phone"
                value={info.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Введите номер телефона"
              />
            </Col>
          </Form.Group>
          {/* Company, TIN */}
          <Form.Group
            as={Row}
            className="border-bottom pb-3 mb-4"
            controlId="info-law"
          >
            {info.is_company && (
              <Col>
                <Form.Label>
                  <h2 className="form-label fw-bold">
                    Наименование организации{' '}
                    <span className="text-danger">*</span>
                  </h2>
                </Form.Label>
                <Form.Control
                  className="mt-3"
                  name="company"
                  value={info.company ? info.company : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Наименование организации"
                  required
                />
              </Col>
            )}
            <Col>
              <Form.Label>
                <h2 className="form-label fw-bold">
                  ИНН {info.is_company ? 'организации' : ''}{' '}
                  <span className="text-danger">*</span>
                </h2>
              </Form.Label>
              <Form.Control
                value={info.tin === 0 ? '' : info.tin}
                name="tin"
                onChange={handleNumberChange}
                onBlur={handleBlur}
                placeholder="Введите ИНН"
                maxLength={10}
                required
              />
            </Col>
          </Form.Group>
          {/* Description, avatar */}
          <Form.Group as={Row} className='pb-2  controlId="info-bio"'>
            <Form.Label>
              <h2 className="form-label fw-bold">Небольшое описание</h2>
            </Form.Label>
            <Col lg={9} sm={8} className="mb-4">
              <Form.Control
                as="textarea"
                className="h-100"
                name="bio"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Добавьте небольшое описание..."
              />
            </Col>

            <Col sm={4} lg={3} className="mb-4">
              <InfoProfile profile={profile} setProfile={setProfile} />
            </Col>
          </Form.Group>
          {/* Socials */}
          <Form.Group as={Row} className="pt-2" controlId="info-socials">
            <Form.Label>
              <h2 className="form-label fw-bold">Социальные сети</h2>
            </Form.Label>
            <div className="d-flex align-items-center mb-3">
              <Button
                size="sm"
                variant="icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
              >
                <i className="fi-vk text-body"></i>
              </Button>
              <Form.Control
                name="social_vk"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ваш аккаунт во ВКонтакте"
              />
            </div>
            <div className="d-flex align-items-center mb-3">
              <Button
                size="sm"
                variant="icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
              >
                <i className="fi-odnoklassniki text-body"></i>
              </Button>
              <Form.Control
                name="social_ok"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ваш аккаунт в Одноклассники"
              />
            </div>
            <div className="d-flex align-items-center mb-3">
              <Button
                size="sm"
                variant="icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3"
              >
                <i className="fi-telegram text-body"></i>
              </Button>
              <Form.Control
                name="social_tel"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ваш аккаунт в Телеграм"
              />
            </div>
          </Form.Group>

          <div className={`${styles.lk__info_btns} border-top mt-4 pt-4 pb-1`}>
            <Button type="submit" className="px-3 px-sm-4">
              Сохранить изменения
            </Button>

            <Button
              variant="link btn-sm px-0"
              className={styles.lk__info_delete}
              onClick={() => setShow(true)}
            >
              <i className="fi-trash me-2"></i> Удалить аккаунт
            </Button>
          </div>
        </Form>
      </LKNavigation>
      <DeleteModal
        show={show}
        setShow={setShow}
        message={'Вы действительно хотите безвозвратно удалить аккаунт?'}
        //тут должна быть функция по удалению
        deleteFunc={() => {}}
      />
    </>
  );
}

export default withAuth(InfoPage);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const breadcrumbs = generateBreadcrumbs(context.resolvedUrl);

  const schemaData = getBreadCrumbsSchema(breadcrumbs);

  return {
    props: {
      schemaData,
    },
  };
};
