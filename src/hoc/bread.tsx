import { useSelector } from 'react-redux';
import SignIn from '@/pages/signin';
import { selectIsAuth, selectUser } from '@/store/user/userSlice';
import { useRouter } from 'next/router';
import { Paths } from '@/constant';
import { useEffect, useState } from 'react';
import NextBreadcrumbs from '@/components/breadCrumbs/BreadCrumbs';

export type WithAuthProps = {};

function bread<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>
) {
  const ComponentBread = (props: T) => {
    const [isShown, setIsShown] = useState<boolean>(true);
    const [dynamicBreadcrumb, setDynamicBreadcrumb] = useState<string>('');

    console.log('ComponentBread dynamicBreadcrumb', dynamicBreadcrumb);
    return (
      <>
        <NextBreadcrumbs
          isShown={isShown}
          dynamicBreadcrumb={dynamicBreadcrumb}
        />
        ;
        <Component
          {...props}
          setIsShown={setIsShown}
          setDynamicBreadcrumb={setDynamicBreadcrumb}
        />
      </>
    );
  };

  return ComponentBread;
}

export default bread;
