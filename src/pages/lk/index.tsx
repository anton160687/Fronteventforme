import { Paths } from '@/constant';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Account() {
  // у нас есть логика с разными путями в зависимости от статуса в хедере, тут это уже лишнее
  // const is_bride = false;
  // const router = useRouter();

  // useEffect(() => {
  //   if (is_bride) router.push(Paths.Account + Paths.Bride);
  //   else router.push(Paths.Account + Paths.Business);
  // }, []);
  return <></>
}

export default Account;