import { useSelector } from 'react-redux';
import SignIn from '@/pages/signin';
import { selectIsAuth } from '@/store/user/userSlice';

export type WithAuthProps = {}

function withAuth<T extends WithAuthProps = WithAuthProps> ( Component: React.ComponentType<T>) {

  const ComponentWithAuth = (props: T) => {
    const isAuth = useSelector(selectIsAuth);

    if (!isAuth) {
      return (
        <SignIn />
      );
    }

    return <Component {...props} />;
  };
  
  return ComponentWithAuth;
}

export default withAuth;