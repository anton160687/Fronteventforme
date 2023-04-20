import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import YandexArrow from '../../../../public/img/icons/yandex.svg';

interface SocialMediaProps {
  setSignUpForm: Dispatch<SetStateAction<boolean>>;
}

export default function SocialMedia({
  setSignUpForm,
}: SocialMediaProps): JSX.Element {
  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault;
  }
  return (
    <section>
      <Button variant="outline-primary w-100 mb-3">
        <i className="fi-vk fs-lg me-1"></i>
        Войти через Вконтакте
      </Button>
      <Button variant="outline-primary w-100 mb-3" onClick={handleClick}>
        <i className="fi-google fs-lg me-1"></i>
        Войти через Google
      </Button>
      <Button
        variant="outline-primary w-100 mb-3"
        className={styles.btn_primary}
      >
        {/*//!Я так поняла, что react-native(?) не дает реднерить svg. Для решения это проблемы надо устанавливать доп библиотеку react-native-svg, поэтому пока опустила этот момент */}
        {/* <YandexArrow /> */}
        Войти через Яндекс
      </Button>

      <div className="d-flex align-items-center py-3 mb-3">
        <hr className="w-100" />
        <div className="px-3">Или</div>
        <hr className="w-100" />
      </div>

      <p
        onClick={() => setSignUpForm((prev) => !prev)}
        className="text-center text-primary cursor-pointer"
      >
        Стандартная регистрация через почту
      </p>
    </section>
  );
}
