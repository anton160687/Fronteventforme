import { useSelector } from 'react-redux';
import SignIn from '@/pages/signin';
import { selectIsAuth, selectUser } from '@/store/user/userSlice';
import { useRouter } from 'next/router';
import { Paths } from '@/constant';
import { useEffect } from 'react';

export type WithAuthProps = {};

function withAuth<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>
) {
  const ComponentWithAuth = (props: T) => {
    const router = useRouter();
    //const isAuth = useSelector(selectIsAuth);
    const user = useSelector(selectUser);
    //const role = user?.is_bride;

    const isAuth = true;
    const role = false;

    if (!isAuth) {
      return <SignIn />;
    }

    if (role && router.pathname.substring(0, 12) === Paths.AccBusiness) {
      router.push(Paths.AccBride);
    }
    if (!role && router.pathname.substring(0, 9) === Paths.AccBride) {
      router.push(Paths.AccBusiness);
    }

    return <Component {...props} />;
  };

  return ComponentWithAuth;
}

export default withAuth;
