import { GetStaticPaths, GetStaticProps } from "next";
// 

export default function CatalogItem({item}:any) {
  console.log(item)  ;
  return (
      <>
      {item.id}
      <br/>
      {item.name}
      <br/>
      {item.username}
      </>
    )
}


//Это специальные функции next для генерации полного списка путей и загрузки информации для конкретного пути:
//Информация грузится только 1 раз, в отличие от getServerSideProps.

export const getStaticPaths: GetStaticPaths = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map(({ id }: any)=>({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps:GetStaticProps = async(context) => {
  const id = context.params?.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {item: data},
  }
}