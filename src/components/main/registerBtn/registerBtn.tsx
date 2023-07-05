import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from '@/styles/main/Main.module.scss';
import Image from 'next/image';
import { Paths } from '@/constant';
import SignUp from '@/components/sign/signUp/SignUp';
import { MouseEvent, useState } from 'react';
import SignIn from '@/components/sign/signIn/SignIn';

//это кнопка для регистрации на главной станицы, отличается размерами от той, что в хедере
function RegisterBtn() {
  // Sign in modal
  const [signinShow, setSigninShow] = useState(false);

  // Sign up modal
  const [signupShow, setSignupShow] = useState(false);

  // Swap modals
  const handleSignInToUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSigninShow(false);
    setSignupShow(true);
  };
  const handleSignUpToIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSigninShow(true);
    setSignupShow(false);
  };

  return (
    <>
      <SignUp
        show={signupShow}
        onHide={() => setSignupShow(false)}
        onSwap={handleSignUpToIn}
      />
      <SignIn
        show={signinShow}
        onHide={() => setSigninShow(false)}
        onSwap={handleSignInToUp}
      />
      <Button
        size="lg"
        // @ts-ignore: bootstrap bag*
        //as={Link}
        //href={Paths.SignUp}
        onClick={() => setSignupShow(true)}
        className={styles.btn__link}
      >
        Регистрация
        <i className="fi-chevron-right ms-2 fs-xs"></i>
      </Button>
    </>
  );
}

export default RegisterBtn;
