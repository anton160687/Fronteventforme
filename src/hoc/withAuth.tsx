import { useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from '@/store/user/userSlice';
import { useRouter } from 'next/router';
import { Paths } from '@/constant';
import SignIn from '@/components/sign/signIn/SignIn';
import { MouseEvent, useEffect, useState } from 'react';
import SignUp from '@/components/sign/signUp/SignUp';

export type WithAuthProps = {};

function withAuth<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>
) {
  const ComponentWithAuth = (props: T) => {
    const router = useRouter();
    const isAuth = useSelector(selectIsAuth);
    const user = useSelector(selectUser);
    const role = user?.is_bride;

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

    useEffect(() => {
      if (!isAuth) {
        setSigninShow(true);
      }
    }, []);

    if (role && router.pathname.substring(0, 12) === Paths.AccBusiness) {
      router.push(Paths.AccBride);
    }
    if (!role && router.pathname.substring(0, 9) === Paths.AccBride) {
      router.push(Paths.AccBusiness);
    }

    return (
      <>
        <SignIn
          show={signinShow}
          onHide={() => {
            if (isAuth) setSigninShow(false);
          }}
          onSwap={handleSignInToUp}
        ></SignIn>
        <SignUp
          show={signupShow}
          onHide={() => {
            if (isAuth) setSignupShow(false);
          }}
          onSwap={handleSignUpToIn}
        />
        <Component {...props}></Component>
      </>
    );
  };

  return ComponentWithAuth;
}

export default withAuth;
