import Link from 'next/link';

export type Item = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type CatalogProps = {
  items: Item[];
};

//тип надо будет заменить, это здесь только для теста
export default function Catalog({ items }: CatalogProps) {
  function renderItems() {
    return items.map(({ id, name }) => (
      <Link key={id} href={`catalog/${id}`}>
        {name}
      </Link>
    ));
  }

  return <></>;
}

//Это специальная функция next для запросов на стороне сервере. Ее наличие обеспечивает ssr:
export async function getServerSideProps() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data: Item[] = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // так можно обращаться к стору прямо из специальных функций Next, но это не рекомендуется
  //Лучше получать данные в компоненте через props и затем диспатчить их в стор из самого компонета.
  // store.dispatch(fetchUsers());

  return {
    props: {
      items: data,
    },
  };
}
