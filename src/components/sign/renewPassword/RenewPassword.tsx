import EnterEmail from '@/components/sign/setPassword/EnterEmail';
import SignInText from '@/components/sign/signInText/SignInText';
import { useState } from 'react';

function RenewPassword(): JSX.Element {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      {!isSent && (
        <EnterEmail setIsSent={setIsSent} setEmail={setEmail} email={email} />
      )}
      {isSent && <SignInText email={email} />}
    </>
  );
}

export default RenewPassword;
