import { Col, Row } from 'react-bootstrap';
import { PlaceReceived } from '@/types/placeType';
import { LOCATION } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';
import { title } from 'process';

type TextDescriptionProps = {
  item: PlaceReceived;
};

function TextDescription({ item }: TextDescriptionProps) {
  let locations: (string | number)[] = [];

  item.location.forEach(({ id }) => {
    let res = LOCATION.filter((value) => value[0] === id);
    if (res.length !== 0) {
      locations.push(res[0][1]);
    }
  });

  function renderLocations() {
    if (locations.length !== 0) {
      return locations.map((location, i) => (
        <>
          <span key={i} className={styles.text_locations}>
            {location}
            {i < locations.length - 1 && ','}
          </span>{' '}
        </>
      ));
    }
    return 'Не указано';
  }

  type descriptionType = {
    title: string;
    value: string | number | JSX.Element | JSX.Element[];
  };
  const leftDescription: descriptionType[] = [
    { title: 'Расположение', value: renderLocations() },
    {
      title: 'Время работы',
      value: `${item?.start_time.substring(
        0,
        5
      )} - ${item?.finish_time.substring(0, 5)}`,
    },
    { title: 'Средний чек', value: item?.average_check },
    { title: 'Свой алкоголь', value: item?.alco ? 'Разрешен' : 'Запрещен' },
    { title: 'Пробковый сбор', value: item?.payment_of_alco },
  ];

  const rightDescription: descriptionType[] = [
    {
      title: 'Продление аренды',
      value: item?.lease_extension_price > 0 ? 'Возможно' : 'Невозможно',
    },
    { title: 'Стоимость продления', value: item?.lease_extension_price },
    // @ts-expect-error
    { title: 'Вместимость', value: item?.capacity },
    // @ts-expect-error
    { title: 'Депозит', value: item?.deposit },
    // @ts-expect-error
    { title: 'Аренда', value: item?.lease },
  ];

  function derscriptionRender(array: descriptionType[]) {
    return (
      <ul className="w-50 list-unstyled">
        {array.map(({ title, value }) => (
          <li
            key={title}
            className="d-flex align-items-start justify-content-between text-dark"
          >
            {title}
            <strong className="text-end">{value || 'Не указано'}</strong>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Row id="review" className="mb-xl-5 mb-md-4 mb-sm-3 d-flex">
      <h4>Описание:</h4>
      <Col
        className={
          styles.text__description_container + ' d-flex justify-content-between'
        }
      >
        {derscriptionRender(leftDescription)}
        {derscriptionRender(rightDescription)}
      </Col>
    </Row>
  );
}

export default TextDescription;
