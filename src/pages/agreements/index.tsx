import { Paths } from '@/constant';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Agreements() {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, []);
}

export default Agreements;
