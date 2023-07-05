import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import { MouseEvent } from 'react';

export default function SocialMedia(): JSX.Element {
  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault;
  }
  return (
    <section>
      <Button variant="outline-primary w-100 mb-3">
        <i className="fi-vk fs-lg me-2"></i>
        <span>Войти через Вконтакте</span>
      </Button>
      <Button variant="outline-primary w-100 mb-3" onClick={handleClick}>
        <i className="fi-google fs-lg me-2"></i>
        <span>Войти через Google</span>
      </Button>
      <Button variant="outline-primary w-100 mb-3">
        <i className="icon-yandex fs-lg me-2"></i>
        <span>Войти через Яндекс</span>
      </Button>

      <div className="d-flex align-items-center mb-3">
        <hr className="w-100" />
        <div className="px-3">Или</div>
        <hr className="w-100" />
      </div>
    </section>
  );
}
