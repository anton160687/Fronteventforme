import { Paths } from '@/constant';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Account() {
  const is_bride = false;
  const router = useRouter();

  useEffect(() => {
    if (is_bride) router.push(Paths.Account + Paths.Bride);
    else router.push(Paths.Account + Paths.Business);
  }, []);
}

export default Account;
