import { resetPassword } from '@/store/user/userAPI';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CountDown from '../countDown/CountDown';

type SignInTextProps = {
  email: string;
};

export default function SignInText({ email }: SignInTextProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const minutes: number = 1;

  const handleClick = () => {
    resetPassword(email);
    setIsDisabled(true);
  };

  return (
    <div className=" text-center text-lg-start">
      <h4 className="h4 mb-4 text-center text-lg-start">
        На вашу почту была выслана ссылка для сброса пароля
      </h4>
      <p>
        Если вы не получили письмо, советуем проверить папку &quot;Спам&quot;
      </p>
      <Button
        variant="primary"
        className="w-100"
        onClick={handleClick}
        disabled={isDisabled}
        style={{ whiteSpace: 'break-spaces' }}
      >
        {'Выслать ссылку повторно\u00A0'}
        {isDisabled && (
          <CountDown
            minutes={minutes}
            setTimeIsUp={() => {
              setIsDisabled(false);
            }}
          />
        )}
      </Button>
    </div>
  );
}
