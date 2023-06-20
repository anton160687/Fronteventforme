import { Paths } from '@/constant';
import withAuth from '@/hoc/WithAuth';
import { selectUser } from '@/store/user/userSlice';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Account() {
  const user = useSelector(selectUser);
  const is_bride = user?.is_bride;
  const router = useRouter();

  useEffect(() => {
    if (is_bride) router.push(Paths.Account + Paths.Bride);
    else router.push(Paths.Account + Paths.Business);
  }, []);
  return <></>
}

export default withAuth(Account);