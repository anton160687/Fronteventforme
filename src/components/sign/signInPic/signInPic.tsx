import ImageLoader from '../../_finder/ImageLoader';
import { Button } from 'react-bootstrap';
import { MouseEvent } from 'react';

type SignInPicProps = {
  onSwap?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function SignInPic({ onSwap }: SignInPicProps): JSX.Element {
  return (
    <>
      <h3 className="h3 mb-4 mb-sm-5 text-center text-md-start">
        Привет. <br />
        Рады видеть вас снова!
      </h3>
      <div className="justify-content-center d-none d-md-flex">
        <ImageLoader
          src="/img/signin.svg"
          width={344}
          height={292}
          alt="Девушка с большим телефоном"
        />
      </div>
      <div
        className="mt-4 mt-sm-5 text-center text-md-start"
        style={{ fontWeight: '500' }}
      >
        Еще нет аккаунта на портале?{'\u00A0'}
        <br />
        <Button
          variant="link"
          className="p-0 text-primary"
          onClick={onSwap}
          style={{ fontWeight: '500' }}
        >
          Регистрация
        </Button>
      </div>
    </>
  );
}
