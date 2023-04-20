import Button from 'react-bootstrap/Button';
import styles from '@/styles/main/Main.module.scss';
import Image from 'next/image';

export default function SocialMedia(): JSX.Element {
  return (
    <div className="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
      <Button variant="outline-primary w-100 mb-3">
        <i className="fi-vk fs-lg me-1"></i>
        Войти через Вконтакте
      </Button>
      <Button variant="outline-primary w-100 mb-3">
        <i className="fi-google fs-lg me-1"></i>
        Войти через Google
      </Button>
      <Button variant="outline-primary w-100 mb-3">
        {/* <i className="fi-yandex fs-lg me-1">
          
        </i> */}
        <img
          src="/img/icons/yandex.svg"
          className={styles.icon_primary + ' fs-lg me-1'}
          alt="yandex icon"
          // width={18}
          // height={21.31}
        />
        Войти через Яндекс
      </Button>

      <div className="d-flex align-items-center py-3 mb-3">
        <hr className="w-100" />
        <div className="px-3">Или</div>
        <hr className="w-100" />
      </div>

      <p className="text-center text-primary cursor-pointer">
        Стандартная регистрация через почту
      </p>
    </div>
  );
}
