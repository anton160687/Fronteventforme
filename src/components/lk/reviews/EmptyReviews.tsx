import { Image } from "react-bootstrap";

function EmptyReviews() {
  return (
    <section className="mt-5">
      <h3 >В списке пока пусто</h3>
      <p>Поделитесь своими впечатлениями о площадке или исполнителях, с которыми вы сотрудничали.</p>
      <Image src="/img/lk/emptyReviews.png" height={796} width={572} alt="Нет отзывов"></Image>
    </section>
  )
}

export default EmptyReviews;