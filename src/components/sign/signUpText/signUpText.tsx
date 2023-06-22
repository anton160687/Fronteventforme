import { CreateUserData } from '@/types/forms';
import { resendActivationLink } from '@/store/user/userAPI';
import { useState } from 'react';
import CountDown from '../countDown/CountDown';
import { Button } from 'react-bootstrap';

type SignUpTextProps = {
  data: CreateUserData;
};

export default function SignUpText({ data }: SignUpTextProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const minutes: number = 1;

  const handleClick = () => {
    resendActivationLink(data.email);
    setIsDisabled(true);
  };

  return (
    <div className=" text-center text-lg-start">
      <h4 className="h4 mb-4">
        Для завершения регистрации перейдите по ссылке на вашей электронной
        почте
      </h4>
      <p>Если вы не получили письмо, проверьте папку &quot;Спам&quot;</p>
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
