import withAuth from '@/hoc/withAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Paths } from '@/constant';

function BusinessPage() {
  //данный способ решает проблему того, что иногда в хлебных крошках при /lk/bride нам надо выводить "Основная информация", но в большинстве случаев не надо
  const route = useRouter();
  useEffect(() => {
    route.push(Paths.AccBusiness + Paths.AccInfo);
  }, []);

  return <></>;
}

export default withAuth(BusinessPage);
