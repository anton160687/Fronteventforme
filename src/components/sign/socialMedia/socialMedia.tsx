import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import YandexArrow from '../../../../public/img/icons/yandex.svg';
import Image from 'next/image';

export default function SocialMedia(): JSX.Element {
  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault;
  }
  return (
    <section style={{ marginLeft: '5rem' }}>
      <Button variant="outline-primary w-100 mb-3">
        <i className="fi-vk fs-lg me-1"></i>
        Войти через Вконтакте
      </Button>
      <Button variant="outline-primary w-100 mb-3" onClick={handleClick}>
        <i className="fi-google fs-lg me-1"></i>
        Войти через Google
      </Button>
      <Button
        variant={'outline-primary w-100 mb-3 ' + styles.yandex_btn}
        className={styles.btn_primary}
      >
        <div
          // src="/img/icons/yandex-pink.svg"
          className={'fs-lg me-1 ' + styles.yandex_icon}
        />
        Войти через Яндекс
      </Button>

      <div className="d-flex align-items-center py-3 mb-3">
        <hr className="w-100" />
        <div className="px-3">Или</div>
        <hr className="w-100" />
      </div>
    </section>
  );
}
