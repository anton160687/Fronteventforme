import ImageLoader from '@/components/_finder/ImageLoader';
import { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';

type SignUpPicProps = {
  onSwap?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const advantages = [
  { class: 'align-items-center', text: 'Подробный чек-лист' },
  { class: 'align-items-center', text: 'Расчет бюджета' },
  {
    class: 'align-items-baseline',
    text: 'Проверенный	каталог с большим ассортиментом',
  },
];

export default function SignUpPic({ onSwap }: SignUpPicProps) {
  return (
    <>
      <h3 className="h3 mb-4 mb-sm-5 text-center text-md-start">
        Присоединяйтесь к EventForMe.
        <br />
        Получите доступ к услугам:
      </h3>
      <div style={{ fontWeight: '500' }}>
        {advantages.map((advantage) => (
          <p className={`d-flex ${advantage.class}`} key={advantage.text}>
            <i className="fi-check-circle fs-lg me-1 text-primary"></i>
            {advantage.text}
          </p>
        ))}

        <p>И множество других полезных услуг</p>
      </div>
      <div className="d-none d-md-flex justify-content-center">
        <ImageLoader
          src="/img/signup.svg"
          width={344}
          height={404}
          alt="Девушка с формой для регистрации"
        />
      </div>
      <div
        className="mt-4 mt-sm-5 justify-content-center justify-content-md-start d-flex align-items-center"
        style={{ fontWeight: '500' }}
      >
        Уже есть аккаунт?{'\u00A0'}
        <Button
          variant="link"
          className="p-0 text-primary"
          onClick={onSwap}
          style={{ fontWeight: '500' }}
        >
          Войти
        </Button>
      </div>
    </>
  );
}
