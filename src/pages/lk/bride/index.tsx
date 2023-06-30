import { ChangeEvent, FormEvent, FocusEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { BrideInfo } from '@/types/lkInfoType';
import InfoProfile from '@/components/lk/info/infoProfile';
import DeleteModal from '@/components/lk/deleteModal/DeleteModal';
import {
  LKSectionsTitles,
  USERNAME_REQUIREMENTS,
  EMAIL_REQUIREMENTS,
} from '@/constant';
import styles from '@/styles/lk/Lk.module.scss';
import withAuth from '@/hoc/withAuth';

import { Dispatch, SetStateAction } from 'react';

type InfoPageProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

function InfoPage({ setIsShown }: InfoPageProps) {
  const initialInfoState: BrideInfo = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
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

  const [info, setInfo] = useState<BrideInfo>(initialInfoState);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInfo({ ...info, [e.target.name]: e.target.value });
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
    bio: 0,
    social_vk: 0,
    social_ok: 0,
    social_tel: 0,
  };
  const [progress, setProgress] = useState(initialProgres);
  let personProgress = 0;
  for (let key in progress) {
    personProgress += progress[key as keyof typeof progress];
    if (personProgress === 99.99) {
      personProgress = 100;
    }
  }
  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    if (e.target.value !== '') {
      setProgress({ ...progress, [e.target.name]: 11.11 });
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
      <LKNavigation
        accountPageTitle={LKSectionsTitles.Info}
        setIsShown={setIsShown}
      >
        <Form onSubmit={handleSubmit}>
          <div className="mb-2 pt-1">Заполнено на {personProgress}%</div>
          <ProgressBar
            variant="warning"
            now={personProgress}
            className="mb-4"
            style={{ height: '.25rem' }}
          />

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
